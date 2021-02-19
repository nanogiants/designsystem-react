import { Variants } from "../Link/Link";

export interface NanoNavigationLink {
    path: string;
    title: string;
    active: boolean;
  }
  
  export interface NanoNavigationProps {
    links: NanoNavigationLink[];
    variant: Variants;
    showLogo?: boolean;
    logoPath?: string;
  }