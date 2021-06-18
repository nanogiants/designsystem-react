import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import './Grid.stories.css';

export default {
  title: 'Tokens/Grid',
  argTypes: {
    fluid: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template: Story = (args) => {
  const { children } = args;
  return <div className="container">{children}</div>;
};

export const Primary: Story = Template.bind({});

Primary.args = {
  children: [
    <div className="row" key="unique">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 first">
        col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 second">
        col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 third">
        col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 fourth">
        col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3
      </div>
    </div>,
  ],
};

export const OffsetXs2: Story = Template.bind({});

OffsetXs2.args = {
  children: [
    <div className="row" key="unique">
      <div className="col-offset-xs-2 col-offset-lg-0 col-xs-10 col-lg-12 first">
        col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 second">
        col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 third">
        col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 fourth">
        col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3
      </div>
    </div>,
  ],
};

export const Nested: Story = Template.bind({});

Nested.args = {
  children: [
    <div className="row" key="unique">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 first">
        col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 second">
        col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6
      </div>
      <div className="col-xs-12">
        <div className="row row-inner" key="unique">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 third">
            inner-row: col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 fourth">
            inner-row: col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6
          </div>
        </div>
      </div>
    </div>,
  ],
};
