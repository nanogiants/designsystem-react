import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { NanoLink } from '../Link/Link';

import { NanoFooterLinks, NanoFooterLinksProps } from './FooterLinks';

export default {
  title: 'Components/Footer Links',
  component: NanoFooterLinks,
  parameters: {
    backgrounds: {
      default: 'nanoblue',
    },
  },
};

const footerLinks: JSX.Element[] = [
  <NanoLink variant='sm' noBorder isFooterLink>Start</NanoLink>,
  <NanoLink variant='sm' noBorder isFooterLink>Über uns</NanoLink>,
  <NanoLink variant='sm' noBorder isFooterLink>Werte</NanoLink>,
  <NanoLink variant='sm' noBorder isFooterLink>App-Entwicklung</NanoLink>,
  <NanoLink variant='sm' noBorder isFooterLink>Referenzen</NanoLink>,
  <NanoLink variant='sm' noBorder isFooterLink>New Work</NanoLink>,
  <NanoLink variant='sm' noBorder isFooterLink>Karriere</NanoLink>,
  <NanoLink variant='sm' noBorder isFooterLink>Kontakt</NanoLink>,
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
