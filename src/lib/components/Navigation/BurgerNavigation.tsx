import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { NanoNavigationLink, NanoSideNavigationProps } from './shared';

const NanoBurgerNav = styled.nav<NanoSideNavigationProps>`
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
  z-index: 10;
`;

const NanoList = styled.div`
  position: absolute;
  right: 18px;
  top: 18px;
  display: flex;
  flex-direction: column;
  width: max-content;
  padding: 48px 20px 10px 20px;
  background-color: #100f39;
  float: right;
  z-index: 9;
`;

const NanoBurgerNavLink = styled(Link)`
  display: block;
  line-height: 16px;
  font-size: 16px;
  font-family: SharpGroteskSmBold19;
  font-weight: 700;
  padding: 8px 0;
  text-decoration: none;
  color: #fff;
`;

const NanoBurgerLine = styled.span`
  display: block;
  position: absolute;
  background: #fff;
  height: 3px;
  transition: left 0.3s ease-out, opacity 0.3s ease-out, top 0.3s ease-out,
    transform 0.3s ease-out, width 0.3s ease-out;
  &:nth-child(1) {
    left: calc(50% - 17px);
    top: calc(50% - 9px);
    transition-delay: 0s;
    width: 30px;
  }
  &:nth-child(2) {
    left: calc(50% - 20px);
    top: calc(50% - 1px);
    transition-delay: 0s;
    width: 24px;
  }
  &:nth-child(3) {
    left: calc(50% - 23px);
    top: calc(50% + 7px);
    width: 18px;
    transition-delay: 0s;
  }
`;

const NanoBurger = styled.a`
  &:not(.is-active) {
    span {
      &:nth-child(2) {
        transition-delay: 0.2s;
      }
    }
  }
  &.is-active {
    span {
      background-color: #fff !important;
      &:nth-child(1) {
        left: calc(50% - 15px);
        top: calc(50% - 1px);
        transition-delay: 0s;
        transform: rotate(135deg);
        width: 30px;
      }
      &:nth-child(2) {
        opacity: 0;
        transition-delay: 0s;
        left: calc(50% - 30px);
      }
      &:nth-child(3) {
        left: calc(50% - 15px);
        top: calc(50% - 1px);
        transition-delay: 0s;
        transform: rotate(225deg);
        width: 30px;
      }
    }
  }
`;

export const NanoBurgerNavigation: FunctionComponent<NanoSideNavigationProps> = (
  props
) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { links } = props;

  const toggleNavigation = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <NanoBurgerNav {...props} onClick={toggleNavigation}>
        <NanoBurger role="button" className={isActive ? 'is-active' : ''}>
          <NanoBurgerLine aria-hidden="true"></NanoBurgerLine>
          <NanoBurgerLine aria-hidden="true"></NanoBurgerLine>
          <NanoBurgerLine aria-hidden="true"></NanoBurgerLine>
        </NanoBurger>
      </NanoBurgerNav>

      {isActive ? (
        <NanoList>
          {links.map((link: NanoNavigationLink, index: number) => (
            <NanoBurgerNavLink
              key={'burgernav-' + link.title + index}
              to={link.path ?? '/#'}
            >
              {link.title}
            </NanoBurgerNavLink>
          ))}
        </NanoList>
      ) : null}
    </>
  );
};
