import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme/colors';

export interface Row {
  headline: string;
  links: (JSX.Element | string)[];
}

export interface NanoFooterLinksProps {
  rows: Row[];
}

const NanoFooterLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NanoFooterLinksRow = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-row-gap: 13.6px;
`;

const NanoFooterLinksRowHeadline = styled.h4`
  font-family: 'Sharp Grotesk Semibold';
  font-size: 17.5px;
  font-weight: 600;
  color: ${colors.primary.white};
  margin: 0;
  padding: 0;
  margin-bottom: -4px;
`;

const NanoFooterLinksRowEntry = styled.div`
  font-family: 'SharpGroteskSmBold19';
  font-size: 19px;
  line-height: 33.6px;
  margin: 0;
  padding: 0;
  width: fit-content;
  color: ${colors.primary.white};
  cursor: pointer;
  &:after {
    display: block;
    content: '';
    margin-top: -1px;
    border-bottom: 2px solid ${colors.primary.giantred};
  }
`;

export const NanoFooterLinks: FunctionComponent<NanoFooterLinksProps> = (
  props
) => {
  const { rows } = props;

  return (
    <NanoFooterLinksContainer>
      {rows.map((row: Row, index: number) => (
        <NanoFooterLinksRow key={'footer-link-row-' + index}>
          <NanoFooterLinksRowHeadline>
            {row.headline}
          </NanoFooterLinksRowHeadline>
          {row.links.map((link: JSX.Element | string, index) => {
            if (React.isValidElement(link)) return link;
            return <NanoFooterLinksRowEntry>{link}</NanoFooterLinksRowEntry>;
          })}
        </NanoFooterLinksRow>
      ))}
    </NanoFooterLinksContainer>
  );
};
