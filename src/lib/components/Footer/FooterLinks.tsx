import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme/colors';

export interface Row {
  headline: string;
  links: JSX.Element[];
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
  grid-row-gap: 8px;
`;

const NanoFooterLinksRowHeadline = styled.h4`
  font-family: 'Sharp Grotesk Semibold';
  font-size: 17.5px;
  font-weight: 600;
  color: ${colors.primary.white};
`;

export const NanoFooterLinks: FunctionComponent<NanoFooterLinksProps> = (
  props
) => {
  const { rows } = props;

  return (
    <NanoFooterLinksContainer>
      {rows.map((row: Row) => (
        <NanoFooterLinksRow>
          <NanoFooterLinksRowHeadline>
            {row.headline}
          </NanoFooterLinksRowHeadline>
          {row.links}
        </NanoFooterLinksRow>
      ))}
    </NanoFooterLinksContainer>
  );
};
