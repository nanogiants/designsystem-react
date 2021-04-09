import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { NanoLink } from '../Link/Link';

import { NanoFooterLinks, NanoFooterLinksProps } from './FooterLinks';

export default {
  title: 'Components/Footer/Footer Links',
  component: NanoFooterLinks,
  parameters: {
    backgrounds: {
      default: 'nanoblue',
    },
  },
  argTypes: {
    rows: {
      description: 'Row[]',
      table: {
        type: {
          summary: 'Type Definition for Row',
          detail: 'headline: string,\nlinks: JSX.Element[] | string',
        },
      },
    },
  },
};

const footerLinks: (JSX.Element | string)[] = [
  'Start',
  'Über uns',
  'Werte',
  'App-Entwicklung',
  'Referenzen',
  'New Work',
  'Karriere',
  'Kontakt',
  <NanoLink variant='lg' noBorder isFooterLink>
    NanoLink
  </NanoLink>,
];

const FooterLinksTemplate = (args: NanoFooterLinksProps) => (
  <NanoFooterLinks {...args} />
);

export const FooterLinks: Story<NanoFooterLinksProps> = FooterLinksTemplate.bind(
  {}
);

FooterLinks.args = {
  rows: [
    {
      headline: 'Discover',
      links: footerLinks,
    },
    {
      headline: 'Social Media',
      links: footerLinks,
    },
    {
      headline: 'Legal Matters',
      links: footerLinks,
    },
  ],
};
