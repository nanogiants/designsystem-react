import React, { useState } from 'react';
import { NanoDropdown } from './Dropdown';

export default {
  title: 'NanoDropdown',
};

export const Primary = () => {
  const [dropdownValue, setDropdownValue] = useState<number | null>(null);
  return (
    <NanoDropdown<number>
      label="Label"
      value={dropdownValue}
      values={[
        {
          key: 'test4',
          value: 4,
        },
        {
          key: 'test5',
          value: 5,
        },
        {
          key: 'test6',
          value: 6,
        },
      ]}
      onChange={(value) => setDropdownValue(value)}
    ></NanoDropdown>
  );
};
