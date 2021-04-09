import React, { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { typography } from '../../theme/typography';

type FontTypes =
  | 'sharpgroteskBook'
  | 'sharpgroteskSemibold'
  | 'sharpgroteskMedium'
  | 'sharpgroteskSemibold19';

const getTextStyle = (font: FontTypes) => styled.p`
  ${typography.textStyles[font]}
`;

export const NanoTextBook: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const Wrapper = getTextStyle('sharpgroteskBook');
  return <Wrapper>{props.children}</Wrapper>;
};

export const NanoTextSemibold: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const Wrapper = getTextStyle('sharpgroteskSemibold');
  return <Wrapper>{props.children}</Wrapper>;
};

export const NanoTextMedium: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const Wrapper = getTextStyle('sharpgroteskMedium');
  return <Wrapper>{props.children}</Wrapper>;
};

export const NanoTextSemibold19: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const Wrapper = getTextStyle('sharpgroteskSemibold19');
  return <Wrapper>{props.children}</Wrapper>;
};
