import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { usePopper } from 'react-popper';
import { useClickOutside, useMultiRef } from '#/ext/react';
import { getComputedStyleBy, measureTextIn } from '#/ext/dom';
import Button from './button';
import classNames from 'classnames';
import { __, concat, flow, get, getOr, identity, invoke, map, max, memoize, noop, once, over } from 'lodash/fp';

const useStyles = flow(
  ({ options, optionText, buttonElement }) => {
    if(!buttonElement) return;

    return {
      maxOptionWidth: once(() =>
        max(map(flow(optionText, measureTextIn(buttonElement), get('width')), options))
      )
    };
  },
  createUseStyles({
    select: {},
    button: {
      padding: [2, 7],
      boxSizing: 'content-box',
      minHeight: '1.29em',
      minWidth: invoke('maxOptionWidth'),

      fallbacks: {
        minWidth: '1ch'
      }
    },
    options: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 2,
      border: [1, 'solid'],
      listStyle: 'none',
      whiteSpace: 'nowrap'
    },
    option: {
      padding: [2, 7],
      width: '100%',
      border: 'none'
    }
  })
);

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
  buttonClassName,
  optionClassName,
  options,
  optionText,
  value,
  onChange
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonElement, setButtonElement] = useState(null);
  const [optionsElement, setOptionsElement] = useState(null);

  const optionsPadding = useMemo(() => getPadding(optionsElement), [optionsElement]);
  const popperOptions = useMemo(() => getPopperOptions(optionsPadding), [optionsPadding]);
  const popper = usePopper(buttonElement, optionsElement, popperOptions);

  const handleClick = useCallback(() => void setIsOpen(value => !value), []);

  const handleClickOption = useCallback(  //eslint-disable-line react-hooks/exhaustive-deps
    memoize(option => () => { setIsOpen(false); if(option !== value) onChange(option); }),
    [value, onChange]
  );

  const handleClickOutside = useCallback(() => setIsOpen(false), []);
  useClickOutside(optionsElement, handleClickOutside);

  const c = useStyles({ options, optionText, buttonElement });

  return (
    <div className={classNames(c.select, className)}>
      <Button ref={useMultiRef(ref, setButtonElement)}
              className={classNames(c.button, buttonClassName)}
              onClick={handleClick}>
        {value !== undefined && optionText(value)}
      </Button>

      {isOpen &&
        <ul ref={setOptionsElement} style={popper.styles.popper} {...popper.attributes.popper}
            className={classNames(c.options, buttonClassName)}>
          {options.map(option =>
            <li key={option}>
              <Button className={classNames(c.option, optionClassName)}
                      onClick={handleClickOption(option)}>
                {optionText(option)}
              </Button>
            </li>
          )}
        </ul>
      }
    </div>
  );
});

Select.defaultProps = {
  optionText: identity,
  onChange: noop
};

if(process.env.NODE_ENV !== 'production')
  Select.displayName = 'Select';

export default Select;
