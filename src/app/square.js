import React from 'react';

export default function Square(props) {
  const { value, win, onClick } = props;
  return (
    <div role="button"
         className={'square' +
           (win ? ' win' : '') +
           (value ? '' : ' empty')
         }
         onClick={onClick}>
      {value}
    </div>
  );
}
