import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import {
  NanoFooterCopyright,
  NanoFooterCopyrightProps,
} from './FooterCopyright';

export default {
  title: 'Components/Footer/Footer Copyright',
  component: NanoFooterCopyright,
  parameters: {
    backgrounds: {
      default: 'nanoblue',
    },
  },
};

const FooterCopyrightTemplate = (args: NanoFooterCopyrightProps) => (
  <NanoFooterCopyright {...args} />
);

export const FooterCopyright: Story<NanoFooterCopyrightProps> = FooterCopyrightTemplate.bind(
  {}
);

FooterCopyright.args = {
  text: '2020 NanoGiants GmbH',
};
