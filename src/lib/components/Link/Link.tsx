import React, { FunctionComponent, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { colors } from '../../theme/colors';

export type Variants = 'sm' | 'lg';

interface NanoLinkProps {
  variant?: Variants;
  inactive?: boolean;
  noBorder?: boolean;
  isNavLink?: boolean;
}

const NgLink = styled(Link)<NanoLinkProps>`
  color: ${({ isNavLink, inactive }) =>
    isNavLink
      ? colors.primary.white
      : inactive
      ? colors.secondary.slowgrey
      : colors.primary.nanoblue};

  border-bottom: ${({ inactive }) =>
    `2px solid ${
      inactive ? colors.secondary.slowgrey : colors.primary.giantred
    }`};

  ${({ noBorder, inactive }) =>
    noBorder && inactive
      ? css`
          border-bottom: none;
        `
      : ''}

  font-family: SharpGrotesk;
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
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
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

interface Props extends LinkProps {
  variant?: Variants;
  inactive?: boolean;
  children?: ReactNode;
  noBorder?: boolean;
  isNavLink?: boolean;
}

export const NanoLink: FunctionComponent<Props> = (props) => {
  const { variant, inactive, noBorder, to, isNavLink } = props;

  const navLinkContent = (
    <NgLink
      to={to}
      variant={variant}
      inactive={inactive}
      noBorder={noBorder}
      isNavLink={isNavLink}
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
