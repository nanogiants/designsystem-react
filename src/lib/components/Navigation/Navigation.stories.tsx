import { Story } from "@storybook/react/types-6-0";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { NanoBurgerNavigation } from "./BurgerNavigation";
import { NanoNavigation } from "./Navigation";
import { NanoSideNavigation } from "./SideNavigation";
import {
  NanoNavigationLink,
  NanoNavigationProps,
  NanoSideNavigationProps,
} from "./shared";

export default {
  title: "Components/Navigation",
  component: NanoNavigation,
  parameters: {
    backgrounds: {
      default: "nanoblue",
    },
  },
  argTypes: {
    showLogo: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["sm", "lg"],
      },
    },
  },
};

const nanoNavigationLinks: NanoNavigationLink[] = [
  {
    path: "/start",
    title: "Start",
    active: true,
  },
  {
    path: "/about-us",
    title: "Über uns",
    active: false,
  },
  {
    path: "/werte",
    title: "Werte",
    active: false,
  },
  {
    path: "/app-entwicklung",
    title: "App-Entwicklung",
    active: false,
  },
  {
    path: "/referenzen",
    title: "Referenzen",
    active: false,
  },
  {
    path: "/new-work",
    title: "New Work",
    active: false,
  },
  {
    path: "/karriere",
    title: "Karriere",
    active: false,
  },
  {
    path: "/kontakt",
    title: "Kontakt",
    active: false,
  },
];

/* Simple Navigation */
const NavigationTemplate = (args: NanoNavigationProps) => (
  <Router>
    <NanoNavigation {...args} />
  </Router>
);

export const Navigation: Story<NanoNavigationProps> = NavigationTemplate.bind(
  {}
);

Navigation.args = {
  variant: "sm",
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
  variant: "sm",
  links: nanoNavigationLinks,
  showLogo: true,
  logoPath: "/#",
};

/* Side Navigation */
const SideNavigationTemplate = (args: NanoSideNavigationProps) => (
  <Router>
    <NanoSideNavigation {...args} />
  </Router>
);

export const SideNavigation: Story<NanoSideNavigationProps> = SideNavigationTemplate.bind(
  {}
);

SideNavigation.argTypes = {
  showLogo: { table: { disable: true } },
  variant: { table: { disable: true } },
  logoPath: { table: { disable: true } },
};
SideNavigation.args = { links: nanoNavigationLinks };

/* Burger Navigation */
const BurgerNavigationTemplate = (args: NanoNavigationProps) => (
  <Router>
    <NanoBurgerNavigation {...args} />
  </Router>
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
