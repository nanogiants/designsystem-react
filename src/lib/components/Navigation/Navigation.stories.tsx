import { Story } from '@storybook/react/types-6-0';
import React from 'react';

import { NanoLink } from '../Link/Link';
import { NanoLogo, NanoLogoVariant } from '../Logo/Logo';
import { NanoLogoSize } from '../Logo/shared';

import { NanoNavigation } from './Navigation';
import { NanoNavigationProps } from './shared';

export default {
  title: 'Components/Navigation/Main Navigation',
  component: NanoNavigation,
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

/* Simple Navigation */
const NavigationTemplate = (args: NanoNavigationProps) => (
  <NanoNavigation {...args} />
);

export const MainNavigationWithLogo: Story<NanoNavigationProps> = NavigationTemplate.bind(
  {}
);

MainNavigationWithLogo.args = {
  links: nanoNavigationLinks,
  logo: (
    <NanoLogo
      variant={NanoLogoVariant.ONE_LINER_WHITE}
      size={NanoLogoSize.MAIN_NAV}
      removePadding={true}
    />
  ),
};

export const MainNavigationWithoutLogo: Story<NanoNavigationProps> = NavigationTemplate.bind(
  {}
);
MainNavigationWithoutLogo.args = {
  links: nanoNavigationLinks,
};
