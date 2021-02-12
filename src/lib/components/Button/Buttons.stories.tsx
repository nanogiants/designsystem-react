import React from 'react';
import { NanoButton, SharedButtonVariants } from './Button';

export default {
  title: 'Button',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: [SharedButtonVariants.PRIMARY, SharedButtonVariants.SECONDARY],
      },
    },
  },
};

const Template = (args) => <NanoButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: SharedButtonVariants.PRIMARY,
  children: 'Button',
};

export const Secondary = () => (
  <NanoButton variant={SharedButtonVariants.SECONDARY}>Button</NanoButton>
);
