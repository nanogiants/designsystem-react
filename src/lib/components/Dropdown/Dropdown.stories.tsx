import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import { NanoDropdown, NanoDropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
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

export const Primary: Story<NanoDropdownProps<number>> = Template.bind({});
Primary.args = {
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
Primary.argTypes = {
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
