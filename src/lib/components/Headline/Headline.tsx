import React, { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { typography } from '../../theme/typography';

type HeadlineTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type FontTypes = 'cinderblock' | 'sharpgrotesk';
const getHeadlineStyle = (font: FontTypes, element: HeadlineTypes) => styled[
  element
]`
  ${typography.headlines[font][element]}
`;

export const NanoH1: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const Wrapper = getHeadlineStyle('cinderblock', 'h1');
  return <Wrapper>{props.children}</Wrapper>;
};

export const NanoH2: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const Wrapper = getHeadlineStyle('cinderblock', 'h2');
  return <Wrapper>{props.children}</Wrapper>;
};

export const NanoH3: FunctionComponent<PropsWithChildren<{
  variant?: FontTypes;
}>> = (props) => {
  const { variant } = props;
  const Wrapper = getHeadlineStyle(variant || 'cinderblock', 'h3');
  return <Wrapper>{props.children}</Wrapper>;
};

export const NanoH4: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const Wrapper = getHeadlineStyle('sharpgrotesk', 'h4');
  return <Wrapper>{props.children}</Wrapper>;
};

export const NanoH5: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const Wrapper = getHeadlineStyle('sharpgrotesk', 'h5');
  return <Wrapper>{props.children}</Wrapper>;
};

export const NanoH6: FunctionComponent<PropsWithChildren<{}>> = (props) => {
  const Wrapper = getHeadlineStyle('sharpgrotesk', 'h6');
  return <Wrapper>{props.children}</Wrapper>;
};
