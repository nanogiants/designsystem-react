import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme/colors';

import { NanoNavigationProps } from './shared';

const NanoNav = styled.nav<NanoNavigationProps>`
  display: flex;
  background-color: ${colors.primary.nanoblue};
  height: max-content;
  padding: 16px;
  ${(props: NanoNavigationProps) => {
    if (props.logo) {
      return {
        paddingTop: '24px',
        justifyContent: 'space-between',
      };
    }
    return {
      paddingTop: '5px',
      width: 'fit-content',
    };
  }}
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

const NanoLogoWrapper = styled.div`
  cursor: pointer;
`;

export const NanoNavigation: FunctionComponent<NanoNavigationProps> = (
  props
) => {
  const { links, logo } = props;
  return (
    <NanoNav {...props}>
      {logo ? (
        <NanoLogoWrapper>
          {logo}
        </NanoLogoWrapper>
      ) : null}
      <NanoList>
        {links.map((link: JSX.Element, index: number) => (
          <NanoListItem key={'nano-navigation-' + link.key + index}>
            {link}
          </NanoListItem>
        ))}
      </NanoList>
    </NanoNav>
  );
};
