import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Button from './button';
import { usePopper } from 'react-popper';
import { useClickOutside, useMultiRef } from '#/ext/react';
import { getComputedStyleBy, measureTextIn } from '#/ext/dom';
import classNames from 'classnames';
import { __, concat, flow, get, getOr, identity, map, max, memoize, over } from 'lodash/fp';

const useStyles = createUseStyles({
  button: {
    padding: [2, 7]
  },
  select: {
    composes: ['$button'],
    boxSizing: 'content-box',
    minWidth: '1ch',
    minHeight: '1.29em'
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 2,
    border: [1, 'solid'],
    listStyle: 'none'
  },
  option: {
    composes: ['$button'],
    width: '100%',
    border: 'none'
  }
});

const getPadding = getComputedStyleBy(flow(
  over(map(
    prop => flow(get(`padding-${prop}`), Number.parseFloat, concat(prop)),
    ['top', 'right', 'bottom', 'left']
  )),
  Object.fromEntries
));

const getPopperOptions = (() => {
  const offset = (offsets =>
    padding => ({ placement, reference }) => offsets(placement)(padding, reference)
  )(getOr(() => [], __, {
    'bottom-end': ({ right, top }, { height }) => [right, -top - height],
    'top-end': ({ right, bottom }, { height }) => [right, -bottom - height],
    'bottom-start': ({ left, top }, { height }) => [-left, -top - height],
    'top-start': ({ left, bottom }, { height }) => [-left, -bottom - height]
  }));

  return padding => ({
    placement: 'bottom-end',
    modifiers: [
      { name: 'flip', options: { fallbackPlacements: ['top-end', 'bottom-start', 'top-start'] } },
      { name: 'offset', options: { offset: offset(padding) } }
    ]
  });
})();

const Select = forwardRef(({
  className,
  itemClassName,
  options,
  optionText = identity,
  onChange,
  value
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectElement, setSelectElement] = useState(null);
  const [optionsElement, setOptionsElement] = useState(null);

  const optionsPadding = useMemo(() => getPadding(optionsElement), [optionsElement]);
  const popperOptions = useMemo(() => getPopperOptions(optionsPadding), [optionsPadding]);
  const popper = usePopper(selectElement, optionsElement, popperOptions);

  const handleOnClick = useCallback(() => void setIsOpen(value => !value), []);

  const handleOnClickOption = useCallback(  //eslint-disable-line react-hooks/exhaustive-deps
    memoize(option => () => { setIsOpen(false); if(option !== value) onChange(option); }),
    [value, onChange]
  );

  const handleClickOutside = useCallback(() => setIsOpen(false), []);
  useClickOutside(optionsElement, handleClickOutside);

  const c = useStyles();
  const minWidth = max(map(flow(optionText, measureTextIn(selectElement), get('width')), options));

  return (
    <>
      <Button ref={useMultiRef(ref, setSelectElement)}
              className={classNames(c.select, className)}
              style={{ minWidth }}
              onClick={handleOnClick}>
        {value !== undefined && optionText(value)}
      </Button>

      {isOpen &&
        <ul ref={setOptionsElement} style={popper.styles.popper} {...popper.attributes.popper}
            className={classNames(c.options, className)}>
          {options.map(option =>
            <li key={option}>
              <Button className={classNames(c.option, itemClassName)}
                      onClick={handleOnClickOption(option)}>
                {optionText(option)}
              </Button>
            </li>
          )}
        </ul>
      }
    </>
  );
});

if(process.env.NODE_ENV !== 'production')
  Select.displayName = 'Select';

export default Select;
