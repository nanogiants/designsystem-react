import { Story } from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Tokens/Typography',
};

const Template: Story = (args) => {
  return args.element;
};

export const Heading1: Story = Template.bind({});

Heading1.args = {
  element: <h1 className="typo-heading-1">HEADLINE</h1>,
};

export const Heading2: Story = Template.bind({});

Heading2.args = {
  element: <h2 className="typo-heading-2">HEADLINE 2</h2>,
};

export const Heading3: Story = Template.bind({});

Heading3.args = {
  element: <h3 className="typo-heading-3">HEADLINE 3</h3>,
};

export const Heading4: Story = Template.bind({});

Heading4.args = {
  element: <h4 className="typo-heading-4">HEADLINE 4</h4>,
};

export const Subtitle: Story = Template.bind({});

Subtitle.args = {
  element: <div className="typo-subtitle">SUBTITLE 4</div>,
};

export const Body1: Story = Template.bind({});

Body1.args = {
  element: <div className="typo-body-1">BODY 1</div>,
};

export const Body2: Story = Template.bind({});

Body2.args = {
  element: <div className="typo-body-2">BODY 2</div>,
};

export const Caption: Story = Template.bind({});

Caption.args = {
  element: <div className="typo-caption">Caption</div>,
};
