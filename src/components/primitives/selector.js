import React from 'react';

const Selector = ({
  value, options, optionText, onChange
}) => (
  <select value={value}
          onChange={e => onChange(options[e.target.selectedIndex])}>
    {options.map(opt =>
      <option key={opt} value={opt}>{optionText(opt)}</option>
    )}
  </select>
);

Selector.defaultProps = {
  optionText: opt => opt
};

export default Selector;
