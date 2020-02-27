import React, { useCallback } from 'react';
import { identity, flow, get, nth, __ } from 'lodash/fp';

const Selector = ({
  value,
  options,
  optionText = identity,
  onChange
}) => {
  const handleOnChange = useCallback(
    flow(get('target.selectedIndex'), nth(__, options), onChange),
    [options, onChange]
  );

  return (
    <select value={value} onChange={handleOnChange}>
      {options.map(opt =>
        <option key={opt} value={opt}>{optionText(opt)}</option>
      )}
    </select>
  );
};

export default Selector;
