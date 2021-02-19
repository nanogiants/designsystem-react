import { Story } from "@storybook/react/types-6-0";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { NanoNavigation } from "./Navigation";
import { NanoNavigationLink, NanoNavigationProps } from "./shared";

export default {
  title: "Components/Navigation",
  component: NanoNavigation,
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
const NavigationTemplate = (args: NanoNavigationProps) => (
  <Router>
    <NanoNavigation {...args} />
  </Router>
);

export const Navigation: Story<NanoNavigationProps> = NavigationTemplate.bind(
  {}
);

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

Navigation.args = {
  variant: "sm",
  links: nanoNavigationLinks,
};

export const MainNavigation: Story<NanoNavigationProps> = NavigationTemplate.bind(
  {}
);
MainNavigation.args = {
  variant: "sm",
  links: nanoNavigationLinks,
  showLogo: true,
  logoPath: "/#",
};
