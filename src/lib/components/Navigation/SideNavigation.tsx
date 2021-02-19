import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { NanoNavigationLink, NanoSideNavigationProps } from "./shared";

const NanoSideNav = styled.nav<NanoSideNavigationProps>`
  display: flex;
  height: fit-content;
  width: fit-content;
`;

const NanoList = styled.ul`
  align-items: flex-end;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const NanoSideNavLink = styled.a`
  display: block;
  height: 12px;
  margin: 6px 0;
  position: relative;
  width: 64px;
  &:after {
    cursor: pointer;
    background-color: #d90855;
    content: "";
    width: 10px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 0;
    transform-origin: 0 50%;
    transition: transform 0.3s ease-out;
    transition-delay: 0;
  }
  &.active,
  &:hover {
    .label {
      transform: translateX(10px);
      opacity: 1;
      transition-delay: 0s;
    }
    :after {
      transform: scaleX(2);
      transition-delay: 0.1s;
    }
  }
`;

const NanoSideNavTitle = styled.span`
  display: block;
  cursor: pointer;
  color: #fff;
  font-family: SharpGroteskSmBold19;
  font-size: 10px;
  text-transform: uppercase;
  line-height: 14px;
  left: 20px;
  opacity: 0;
  position: relative;
  transform-origin: 0 50%;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  transition-delay: 0.1s;
`;

export const NanoSideNavigation: FunctionComponent<NanoSideNavigationProps> = (
  props
) => {
  const { links } = props;
  return (
    <NanoSideNav {...props}>
      <NanoList>
        {links.map((link: NanoNavigationLink, index: number) => (
          <NanoSideNavLink
            key={"sidenav-" + link.title + index}
            className={link.active ? "active" : null}
          >
            <NanoSideNavTitle className="label">{link.title}</NanoSideNavTitle>
          </NanoSideNavLink>
        ))}
      </NanoList>
    </NanoSideNav>
  );
};
