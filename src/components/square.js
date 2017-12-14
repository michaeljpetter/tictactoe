import React from 'react';

const Square = ({
  value, win, onClick
}) => (
  <div role="button"
       className={'square' +
         (win ? ' win' : '') +
         (value ? '' : ' empty')
       }
       onClick={onClick}>
    {value}
  </div>
);

export default Square;
