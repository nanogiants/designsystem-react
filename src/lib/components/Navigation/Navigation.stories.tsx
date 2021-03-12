import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { NanoLink } from '../Link/Link';

import { NanoBurgerNavigation } from './BurgerNavigation';
import { NanoNavigation } from './Navigation';
import { NanoSideNavigation } from './SideNavigation';
import { NanoNavigationProps, NanoSideNavigationProps } from './shared';

export default {
  title: 'Components/Navigation',
  component: NanoNavigation,
  parameters: {
    backgrounds: {
      default: 'nanoblue',
    },
  },
  argTypes: {
    showLogo: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['sm', 'lg'],
      },
    },
  },
};

const nanoNavigationLinks: JSX.Element[] = [
  <NanoLink variant='sm' inactive={false} noBorder isNavLink>
    Start
  </NanoLink>,
  <NanoLink variant='sm' inactive={true} noBorder isNavLink>
    Über uns
  </NanoLink>,
];

/* Simple Navigation */
const NavigationTemplate = (args: NanoNavigationProps) => (
  <NanoNavigation {...args} />
);

export const Navigation: Story<NanoNavigationProps> = NavigationTemplate.bind(
  {}
);

Navigation.args = {
  links: nanoNavigationLinks,
};

/* Main Navigation*/
export const MainNavigation: Story<NanoNavigationProps> = NavigationTemplate.bind(
  {}
);
MainNavigation.argTypes = {
  showLogo: { table: { disable: true } },
};
MainNavigation.args = {
  links: nanoNavigationLinks,
  showLogo: true,
  logoHref: '/#',
};

/* Side Navigation */
const SideNavigationTemplate = (args: NanoSideNavigationProps) => (
  <NanoSideNavigation {...args} />
);

export const SideNavigation: Story<NanoSideNavigationProps> = SideNavigationTemplate.bind(
  {}
);

SideNavigation.argTypes = {
  showLogo: { table: { disable: true } },
  variant: { table: { disable: true } },
  logoPath: { table: { disable: true } },
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
  ],
};

/* Burger Navigation */
const BurgerNavigationTemplate = (args: NanoNavigationProps) => (
  <NanoBurgerNavigation {...args} />
);

export const BurgerNavigation: Story<NanoNavigationProps> = BurgerNavigationTemplate.bind(
  {}
);

BurgerNavigation.argTypes = {
  showLogo: { table: { disable: true } },
  variant: { table: { disable: true } },
  logoPath: { table: { disable: true } },
};
BurgerNavigation.args = { links: nanoNavigationLinks };
