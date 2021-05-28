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
      <div className='col-xs-1 col-sm-2 col-md-3 col-lg-4 col-xl-12 first'>
        col-xs-3 col-sm-2 col-md-3 col-lg-4 col-xl-12
      </div>
      <div className='col-xs-3 col-sm-1 col-md-3 col-lg-5 col-xl-2 second'>
        col-xs-3 col-sm-1 col-md-3 col-lg-5 col-xl-2
      </div>
      <div className='col-xs-6 col-sm-5 col-md-6 col-lg-5 col-xl-2 third'>
        col-xs-4 col-sm-5 col-md-6 col-lg-5 col-xl-2
      </div>
    </div>,
  ],
};
