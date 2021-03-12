import React from 'react';

import { NanoTextBook, NanoTextSemibold, NanoTextMedium } from './Text';

export default {
  title: 'Components/Text',
  argTypes: {},
};

const loremipsum =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';

const TemplateSharpGroteskBook = (args) => <NanoTextBook {...args} />;

export const SharpGroteskBook = TemplateSharpGroteskBook.bind({});
SharpGroteskBook.args = {
  children: loremipsum,
};
const TemplateSharpGroteskSemibold = (args) => <NanoTextSemibold {...args} />;

export const SharpGroteskSemibold = TemplateSharpGroteskSemibold.bind({});
SharpGroteskSemibold.args = {
  children: loremipsum,
};

const TemplateSharpGroteskMedium = (args) => <NanoTextMedium {...args} />;

export const SharpGroteskMedium = TemplateSharpGroteskMedium.bind({});
SharpGroteskMedium.args = {
  children: loremipsum,
};
