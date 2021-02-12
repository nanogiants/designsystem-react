import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme/colors';
import { NanoLink, Variants } from '../Link/Link';

export interface NanoNavigationLink {
  path: string;
  title: string;
  active: boolean;
}

interface Props {
  links: NanoNavigationLink[];
  variant: Variants;
}

const NanoNav = styled.nav<Props>`
  display: flex;
  ${({ variant }) => {
    if (variant === 'sm') {
      return {
        height: '24px',
      };
    }
    return {
      height: '32px',
    };
  }}
  background-color: ${colors.primary.nanoblue};
  width: fit-content;
`;

const NanoList = styled.ul`
  align-items: flex-end;
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const NanoListItem = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: unset;
  }
`;

export const NanoNavigation: FunctionComponent<Props> = (props) => {
  const { links, variant } = props;
  return (
    <NanoNav {...props}>
      <NanoList>
        {links.map((link: NanoNavigationLink, index: number) => (
          <NanoListItem key={'nano-navigation-' + link.title + index}>
            <NanoLink
              to={link.path}
              inactive={!link.active}
              variant={variant}
              noBorder
              isNavLink
            >
              {link.title}
            </NanoLink>
          </NanoListItem>
        ))}
      </NanoList>
    </NanoNav>
  );
};
