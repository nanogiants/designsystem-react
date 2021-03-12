import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import { NanoDropdown, NanoDropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: NanoDropdown,
  argTypes: {
    value: { table: { disable: true } },
    values: { table: { disable: true } },
  },
};

const Template: Story<NanoDropdownProps<any>> = (props) => {
  const [dropdownValue, setDropdownValue] = useState<any | null>(null);

  return (
    <NanoDropdown<any>
      {...props}
      value={dropdownValue}
      onChange={(value) => setDropdownValue(value)}
    />
  );
};

export const Dropdown: Story<NanoDropdownProps<number>> = Template.bind({});
Dropdown.args = {
  label: 'Label',
  values: [
    {
      key: 'Hello',
      value: 4,
    },
    {
      key: 'You',
      value: 5,
    },
    {
      key: 'Beautiful',
      value: 6,
    },
    {
      key: 'Human',
      value: 7,
    },
  ],
};
Dropdown.argTypes = {
  error: {
    control: {
      type: 'text',
    },
  },
  required: {
    control: {
      type: 'boolean',
    },
  },
};
