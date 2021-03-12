import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';

import { NanoTextInput, NanoTextInputProps } from './Textinput';

export default {
  title: 'Components/TextInput',
  argTypes: {
    error: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template: Story<NanoTextInputProps> = (props) => {
  const [textInputValue, setTextInputValue] = useState<string>('');

  return (
    <NanoTextInput
      {...props}
      value={textInputValue}
      onChange={(e) => setTextInputValue(e.target.value)}
    ></NanoTextInput>
  );
};

export const TextInput: Story<NanoTextInputProps> = Template.bind({});
TextInput.args = {
  label: 'Label',
  required: false,
};
