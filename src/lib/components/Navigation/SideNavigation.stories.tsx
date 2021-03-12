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
};

/* Side Navigation */
const SideNavigationTemplate = (args: NanoSideNavigationProps) => (
  <NanoSideNavigation {...args} />
);

export const SideNavigation: Story<NanoSideNavigationProps> = SideNavigationTemplate.bind(
  {}
);

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
