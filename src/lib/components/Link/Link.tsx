import React, { FunctionComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../../theme/colors';

export type Variants = 'sm' | 'lg';

interface NgLinkProps {
  variant?: Variants;
  inactive?: boolean;
  noBorder?: boolean;
  isNavLink?: boolean;
  isFooterLink?: boolean;
}

const NgLink = styled.div<NgLinkProps>`
  color: ${({ isNavLink, inactive, isFooterLink }) =>
    isNavLink || isFooterLink
      ? colors.primary.white
      : inactive
      ? colors.secondary.slowgrey
      : colors.primary.nanoblue};

  border-bottom: ${({ inactive }) =>
    `2px solid ${
      inactive ? colors.secondary.slowgrey : colors.primary.giantred
    }`};

  ${({ noBorder }) =>
    noBorder
      ? css`
          border-bottom: none;
        `
      : ''}

  font-family: SharpGroteskSmBold19;
  font-style: normal;
  font-weight: bold;
  width: fit-content;
  font-weight: 700;
  text-decoration: none;
  padding-bottom: '0px';

  ${({ variant }) => {
    if (variant === 'sm') {
      return {
        fontSize: '12px',
        lineHeight: '16px',
      };
    }
    return {
      fontSize: '16px',
      lineHeight: '26px',
    };
  }}

  :visited {
    color: ${({ isNavLink }) =>
      isNavLink ? colors.primary.white : colors.secondary.microblue};
  }

  ::after {
    display: block;
    content: '';
    margin-top: -1px;
    border-bottom: ${({ isNavLink, inactive }) =>
      '2px solid ' +
      (isNavLink || !inactive
        ? colors.primary.giantred
        : colors.secondary.slowgrey)};
    ${({ inactive }) =>
      inactive
        ? css`
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
            transform-origin: 0% 50%;
          `
        : ''}
  }

  :hover {
    cursor: pointer;
    border-bottom: unset;

    :after {
       {
        transform: scaleX(1);
      }
    }
  }
`;

const LinkWrapper = styled.div`
  width: fit-content;
`;

export interface NanoLinkProps {
  variant?: Variants;
  inactive?: boolean;
  children?: ReactNode;
  noBorder?: boolean;
  isNavLink?: boolean;
  isFooterLink?: boolean;
}

export const NanoLink: FunctionComponent<NanoLinkProps> = (props) => {
  const { variant, inactive, noBorder, isNavLink, isFooterLink } = props;

  const navLinkContent = (
    <NgLink
      variant={variant}
      inactive={inactive}
      noBorder={noBorder}
      isNavLink={isNavLink}
      isFooterLink={isFooterLink}
    >
      {props.children}
    </NgLink>
  );
  return isNavLink ? (
    navLinkContent
  ) : (
    <LinkWrapper>{navLinkContent}</LinkWrapper>
  );
};
