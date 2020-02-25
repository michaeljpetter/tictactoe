import React from 'react';
import { identity } from 'lodash/fp';

const Selector = ({
  value,
  options,
  optionText = identity,
  onChange
}) => (
  <select value={value}
          onChange={e => onChange(options[e.target.selectedIndex])}>
    {options.map(opt =>
      <option key={opt} value={opt}>{optionText(opt)}</option>
    )}
  </select>
);

export default Selector;
