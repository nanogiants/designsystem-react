import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme/colors';

export interface NanoFooterCopyrightProps {
  text: string;
}

const NanoFooterCopyrightText = styled.div`
  font-family: 'SharpGroteskBook19';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  margin: 0;
  padding: 0;
  width: fit-content;
  color: ${colors.primary.white};
`;

export const NanoFooterCopyright: FunctionComponent<NanoFooterCopyrightProps> = (
  props
) => {
  const { text } = props;

  return <NanoFooterCopyrightText>© {text}</NanoFooterCopyrightText>;
};
