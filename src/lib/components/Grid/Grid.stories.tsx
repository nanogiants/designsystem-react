import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import './Grid.stories.css';

import { NanoGrid, NanoGridProps } from './Grid';

export default {
  title: 'Components/Grid',
  component: NanoGrid,
  argTypes: {
    fluid: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template: Story<NanoGridProps> = (args) => {
  const { children } = args;
  return <NanoGrid {...args}>{children}</NanoGrid>;
};

export const Primary: Story<NanoGridProps> = Template.bind({});

Primary.args = {
  children: [
    <div className='row' key='unique'>
      <div className='col-3 first'>a</div>
      <div className='col-3 second'>b</div>
      <div className='col-6 third'>c</div>
    </div>,
  ],
};
