import React from 'react';
import classNames from 'classnames';

const Square = ({
  value, win, onClick
}) => (
  <div role="button"
       className={classNames('square', { win })}
       onClick={onClick}>
    {value}
  </div>
);

export default Square;
