import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { colors } from '../../theme/colors';
import { LogoClaim } from './LogoClaim';
import { LogoImageBrandOnly } from './LogoImageBrandOnly';
import { LogoOneLiner } from './LogoOneLiner';
import { LogoTwoLiner } from './LogoTwoLiner';
import { LogoWordBrandOnly } from './LogoWordBrandOnly';

export interface LogoProps {
  width?: number;
  height?: number;
  fill?: string;
}

export enum NanoLogoVariant {
  CLAIM_BLUE = 'CLAIM_BLUE',
  CLAIM_BLACK = 'CLAIM_BLACK',
  CLAIM_WHITE = 'CLAIM_WHITE',
  CLAIM_BLUE_RED = 'CLAIM_BLUE_RED',

  WORD_BRAND_ONLY_BLUE = 'WORD_BRAND_ONLY_BLUE',
  WORD_BRAND_ONLY_BLACK = 'WORD_BRAND_ONLY_BLACK',
  WORD_BRAND_ONLY_WHITE = 'WORD_BRAND_ONLY_WHITE',

  IMAGE_BRAND_ONLY_BLUE = 'IMAGE_BRAND_ONLY_BLUE',
  IMAGE_BRAND_ONLY_BLACK = 'IMAGE_BRAND_ONLY_BLACK',
  IMAGE_BRAND_ONLY_WHITE = 'IMAGE_BRAND_ONLY_WHITE',
  IMAGE_BRAND_ONLY_RED = 'IMAGE_BRAND_ONLY_RED',

  ONE_LINER_BLUE = 'ONE_LINER_BLUE',
  ONE_LINER_BLACK = 'ONE_LINER_BLACK',
  ONE_LINER_WHITE = 'ONE_LINER_WHITE',

  TWO_LINER_BLUE = 'TWO_LINER_BLUE',
  TWO_LINER_BLACK = 'TWO_LINER_BLACK',
  TWO_LINER_WHITE = 'TWO_LINER_WHITE',
}

interface Props {
  variant?: NanoLogoVariant;
}

const NanoLogoWrapper = styled.div`
  padding: 10px;
`;

const getLogoComponent = (variant: NanoLogoVariant): JSX.Element => {
  switch (variant) {
    case NanoLogoVariant.CLAIM_BLUE:
      return <LogoClaim />;
      break;
    case NanoLogoVariant.CLAIM_BLACK:
      return <LogoClaim fill={colors.primary.black} />;
      break;
    case NanoLogoVariant.CLAIM_WHITE:
      return <LogoClaim fill={colors.primary.white} />;
      break;
    case NanoLogoVariant.CLAIM_WHITE:
      return (
        <LogoClaim
          fill={colors.primary.nanoblue}
          fillSubtitle={colors.primary.giantred}
        />
      );
      break;

    case NanoLogoVariant.WORD_BRAND_ONLY_BLUE:
      return <LogoWordBrandOnly />;
      break;
    case NanoLogoVariant.WORD_BRAND_ONLY_BLACK:
      return <LogoWordBrandOnly fill={colors.primary.black} />;
      break;
    case NanoLogoVariant.WORD_BRAND_ONLY_WHITE:
      return <LogoWordBrandOnly fill={colors.primary.white} />;
      break;

    case NanoLogoVariant.IMAGE_BRAND_ONLY_BLUE:
      return <LogoImageBrandOnly />;
      break;
    case NanoLogoVariant.IMAGE_BRAND_ONLY_BLACK:
      return <LogoImageBrandOnly fill={colors.primary.black} />;
      break;
    case NanoLogoVariant.IMAGE_BRAND_ONLY_WHITE:
      return <LogoImageBrandOnly fill={colors.primary.white} />;
      break;
    case NanoLogoVariant.IMAGE_BRAND_ONLY_RED:
      return <LogoImageBrandOnly fill={colors.primary.giantred} />;
      break;

    case NanoLogoVariant.ONE_LINER_BLUE:
      return <LogoOneLiner />;
      break;
    case NanoLogoVariant.ONE_LINER_BLACK:
      return <LogoOneLiner fill={colors.primary.black} />;
      break;
    case NanoLogoVariant.ONE_LINER_WHITE:
      return <LogoOneLiner fill={colors.primary.white} />;
      break;

    case NanoLogoVariant.TWO_LINER_BLUE:
      return <LogoTwoLiner />;
      break;
    case NanoLogoVariant.TWO_LINER_BLACK:
      return <LogoTwoLiner fill={colors.primary.black} />;
      break;
    case NanoLogoVariant.TWO_LINER_WHITE:
      return <LogoTwoLiner fill={colors.primary.white} />;
      break;

    default:
      break;
  }
};

export const NanoLogo: FunctionComponent<Props> = (props) => {
  const variant = props.variant || NanoLogoVariant.CLAIM_BLUE;

  return (
    <NanoLogoWrapper {...props}>{getLogoComponent(variant)}</NanoLogoWrapper>
  );
};
