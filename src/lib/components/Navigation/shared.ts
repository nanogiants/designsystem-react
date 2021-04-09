export interface NanoNavigationLink {
  path: string;
  title: string;
  active: boolean;
}

export interface NanoSideNavigationLink {
  active: boolean;
  content: JSX.Element | string;
}

export interface NanoSideNavigationProps {
  links: NanoSideNavigationLink[];
}

export interface NanoBurgerNavigationProps {
  links: JSX.Element[];
}

export interface NanoNavigationProps extends NanoBurgerNavigationProps {
  logo?: JSX.Element;
}
