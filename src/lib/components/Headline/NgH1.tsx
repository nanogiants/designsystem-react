import React, { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { typography } from '../../theme/typography';

const H1 = styled.h1`
  ${typography.headlines.cinderblock.h1}
  margin: 0;
`;

export const NanoH1: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  return <H1>{props.children}</H1>;
};
