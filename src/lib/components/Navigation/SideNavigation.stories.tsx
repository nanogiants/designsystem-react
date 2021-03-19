import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { NanoLink } from '../Link/Link';

import { NanoSideNavigation } from './SideNavigation';
import { NanoSideNavigationProps } from './shared';

export default {
  title: 'Components/Navigation/Side Navigation',
  component: NanoSideNavigation,
  parameters: {
    backgrounds: {
      default: 'nanoblue',
    },
  },
  argTypes: {
    links: {
      description: 'NanoSideNavigationLink[]',
      table: {
        type: {
          summary: 'Type Definition for NanoSideNavigationLink:',
          detail: 'active: boolean,\ncontent: JSX.Element | string',
        },
      },
    },
  },
};

/* Side Navigation */
const SideNavigationTemplate = (args: NanoSideNavigationProps) => (
  <NanoSideNavigation {...args} />
);

export const SideNavigation: Story<NanoSideNavigationProps> = SideNavigationTemplate.bind(
  {}
);

SideNavigation.argTypes = {
  logoHref: { table: { disable: true } },
};
SideNavigation.args = {
  links: [
    {
      active: true,
      content: 'Start',
    },
    {
      active: false,
      content: (
        <NanoLink variant='sm' inactive={true} noBorder isNavLink>
          Über uns
        </NanoLink>
      ),
    },
    {
      active: false,
      content: (
        <NanoLink variant='sm' inactive={true} noBorder isNavLink>
          Werte
        </NanoLink>
      ),
    },
    {
      active: false,
      content: (
        <NanoLink variant='sm' inactive={true} noBorder isNavLink>
          App-Entwicklung
        </NanoLink>
      ),
    },
    {
      active: false,
      content: 'Referenzen',
    },
    {
      active: false,
      content: (
        <NanoLink variant='sm' inactive={true} noBorder isNavLink>
          New Work
        </NanoLink>
      ),
    },
  ],
};
