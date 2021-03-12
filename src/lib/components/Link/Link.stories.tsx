import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { NanoLink, NanoLinkProps } from './Link';

export default {
  title: 'Components/Link',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['sm', 'lg'],
      },
    },
    inactive: {
      control: {
        type: 'boolean',
      },
    },
    noBorder: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template: Story<NanoLinkProps> = (args) => <NanoLink {...args} />;

export const Link: Story<NanoLinkProps> = Template.bind({});
Link.args = {
  children: 'Link',
  variant: 'lg',
};
