import { Variants } from "../Link/Link";

export interface NanoNavigationLink {
  path: string;
  title: string;
  active: boolean;
}

export interface NanoSideNavigationProps {
  links: NanoNavigationLink[];
}

export interface NanoNavigationProps extends NanoSideNavigationProps {
  variant: Variants;
  showLogo?: boolean;
  logoPath?: string;
}
