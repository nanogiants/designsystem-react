import React from 'react';
import { NanoH1, NanoH2, NanoH3, NanoH4, NanoH5, NanoH6 } from './Headline';

export default {
  title: 'Components/Headlines',
  argTypes: {},
};

const TemplateH1 = (args) => <NanoH1 {...args} />;

export const H1 = TemplateH1.bind({});
H1.args = {
  children: 'HEADLINE1',
};
const TemplateH2 = (args) => <NanoH2 {...args} />;

export const H2 = TemplateH2.bind({});
H2.args = {
  children: 'HEADLINE2',
};

const TemplateH3 = (args) => <NanoH3 {...args} />;

export const H3 = TemplateH3.bind({});
H3.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: ['sharpgrotesk', 'cinderblock'],
    },
  },
};
H3.args = {
  children: 'HEADLINE3',
};

const TemplateH4 = (args) => <NanoH4 {...args} />;

export const H4 = TemplateH4.bind({});
H4.args = {
  children: 'HEADLINE3',
};

const TemplateH5 = (args) => <NanoH5 {...args} />;

export const H5 = TemplateH5.bind({});
H5.args = {
  children: 'HEADLINE3',
};

const TemplateH6 = (args) => <NanoH6 {...args} />;

export const H6 = TemplateH6.bind({});
H6.args = {
  children: 'HEADLINE3',
};
