import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { NanoLink } from '../Link/Link';

import { NanoBurgerNavigation } from './BurgerNavigation';
import { NanoNavigationProps } from './shared';

export default {
  title: 'Components/Navigation/Burger Navigation',
  component: NanoBurgerNavigation,
  parameters: {
    backgrounds: {
      default: 'nanoblue',
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
  <NanoLink variant='sm' inactive={true} noBorder isNavLink>
    Werte
  </NanoLink>,
  <NanoLink variant='sm' inactive={true} noBorder isNavLink>
    App-Entwicklung
  </NanoLink>,
  <NanoLink variant='sm' inactive={true} noBorder isNavLink>
    Referenzen
  </NanoLink>,
  <NanoLink variant='sm' inactive={true} noBorder isNavLink>
    New Work
  </NanoLink>,
  <NanoLink variant='sm' inactive={true} noBorder isNavLink>
    Karriere
  </NanoLink>,
  <NanoLink variant='sm' inactive={true} noBorder isNavLink>
    Kontakt
  </NanoLink>,
];

/* Burger Navigation */
const BurgerNavigationTemplate = (args: NanoNavigationProps) => (
  <NanoBurgerNavigation {...args} />
);

export const BurgerNavigation: Story<NanoNavigationProps> = BurgerNavigationTemplate.bind(
  {}
);

BurgerNavigation.args = { links: nanoNavigationLinks };
