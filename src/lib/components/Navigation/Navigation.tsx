import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme/colors';
import { NanoLogo, NanoLogoVariant } from '../Logo/Logo';
import { NanoLogoSize } from '../Logo/shared';

import { NanoNavigationProps } from './shared';

const NanoNav = styled.nav<NanoNavigationProps>`
  display: flex;
  background-color: ${colors.primary.nanoblue};
  height: max-content;
  ${(props: NanoNavigationProps) => {
    if (props.showLogo) {
      return {
        paddingTop: '24px',
        justifyContent: 'space-between',
        width: '100%',
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

const NanoLogoWrapper = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const NanoNavigation: FunctionComponent<NanoNavigationProps> = (
  props
) => {
  const { links, showLogo, logoHref } = props;
  return (
    <NanoNav {...props}>
      {showLogo ? (
        <NanoLogoWrapper href={logoHref ?? '/#'}>
          <NanoLogo
            variant={NanoLogoVariant.ONE_LINER_WHITE}
            size={NanoLogoSize.MAIN_NAV}
            removePadding={true}
          />
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
