import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { colors } from "../../theme/colors";
import { LogoClaim } from "./LogoClaim";
import { LogoImageBrandOnly } from "./LogoImageBrandOnly";
import { LogoOneLiner } from "./LogoOneLiner";
import { LogoTwoLiner } from "./LogoTwoLiner";
import { LogoWordBrandOnly } from "./LogoWordBrandOnly";
import { NanoLogoSize } from "./shared";

export enum NanoLogoVariant {
  CLAIM_BLUE = "CLAIM_BLUE",
  CLAIM_BLACK = "CLAIM_BLACK",
  CLAIM_WHITE = "CLAIM_WHITE",
  CLAIM_BLUE_RED = "CLAIM_BLUE_RED",

  WORD_BRAND_ONLY_BLUE = "WORD_BRAND_ONLY_BLUE",
  WORD_BRAND_ONLY_BLACK = "WORD_BRAND_ONLY_BLACK",
  WORD_BRAND_ONLY_WHITE = "WORD_BRAND_ONLY_WHITE",

  IMAGE_BRAND_ONLY_BLUE = "IMAGE_BRAND_ONLY_BLUE",
  IMAGE_BRAND_ONLY_BLACK = "IMAGE_BRAND_ONLY_BLACK",
  IMAGE_BRAND_ONLY_WHITE = "IMAGE_BRAND_ONLY_WHITE",
  IMAGE_BRAND_ONLY_RED = "IMAGE_BRAND_ONLY_RED",

  ONE_LINER_BLUE = "ONE_LINER_BLUE",
  ONE_LINER_BLACK = "ONE_LINER_BLACK",
  ONE_LINER_WHITE = "ONE_LINER_WHITE",

  TWO_LINER_BLUE = "TWO_LINER_BLUE",
  TWO_LINER_BLACK = "TWO_LINER_BLACK",
  TWO_LINER_WHITE = "TWO_LINER_WHITE",
}

export interface NanoLogoProps {
  size?: NanoLogoSize;
  variant?: NanoLogoVariant;
}

const mapLogoSize = (size: NanoLogoSize): number => {
  switch (size) {
    case NanoLogoSize.SMALL:
      return 0.5;
    case NanoLogoSize.LARGE:
      return 1.5;
    default:
      return 1;
  }
};

const NanoLogoWrapper = styled.div<NanoLogoProps>`
  ${(props: NanoLogoProps) => {
    // CLAIM LOGO
    if (
      [
        NanoLogoVariant.CLAIM_BLACK,
        NanoLogoVariant.CLAIM_BLUE,
        NanoLogoVariant.CLAIM_WHITE,
        NanoLogoVariant.CLAIM_BLUE_RED,
      ].includes(props.variant)
    ) {
      return css`
        padding: ${56 * mapLogoSize(props.size)}px;
      `;
    }
    // TWO LINER LOGO
    if (
      [
        NanoLogoVariant.TWO_LINER_BLUE,
        NanoLogoVariant.TWO_LINER_BLACK,
        NanoLogoVariant.TWO_LINER_WHITE,
      ].includes(props.variant)
    ) {
      return css`
        padding: ${56 * mapLogoSize(props.size)}px;
      `;
    }
    // WORD BRAND ONLY LOGO
    if (
      [
        NanoLogoVariant.WORD_BRAND_ONLY_BLACK,
        NanoLogoVariant.WORD_BRAND_ONLY_BLUE,
        NanoLogoVariant.WORD_BRAND_ONLY_WHITE,
      ].includes(props.variant)
    ) {
      return css`
        padding: ${48 * mapLogoSize(props.size)}px;
      `;
    }
    // ONE LINER AND IMAGE BRAND ONLY LOGO
    return css`
      padding: ${58 * mapLogoSize(props.size)}px;
    `;
  }};
`;

const getLogoComponent = (
  variant: NanoLogoVariant,
  size: NanoLogoSize
): JSX.Element => {
  switch (variant) {
    case NanoLogoVariant.CLAIM_BLUE:
      return <LogoClaim size={size} />;
    case NanoLogoVariant.CLAIM_BLACK:
      return (
        <LogoClaim
          fill={colors.primary.black}
          fillSubtitle={colors.primary.black}
          size={size}
        />
      );
    case NanoLogoVariant.CLAIM_WHITE:
      return (
        <LogoClaim
          fill={colors.primary.white}
          fillSubtitle={colors.primary.white}
          size={size}
        />
      );
    case NanoLogoVariant.CLAIM_BLUE_RED:
      return (
        <LogoClaim
          fill={colors.primary.nanoblue}
          fillSubtitle={colors.primary.giantred}
          size={size}
        />
      );

    case NanoLogoVariant.WORD_BRAND_ONLY_BLUE:
      return <LogoWordBrandOnly size={size} />;
    case NanoLogoVariant.WORD_BRAND_ONLY_BLACK:
      return <LogoWordBrandOnly fill={colors.primary.black} size={size} />;
    case NanoLogoVariant.WORD_BRAND_ONLY_WHITE:
      return <LogoWordBrandOnly fill={colors.primary.white} size={size} />;

    case NanoLogoVariant.IMAGE_BRAND_ONLY_BLUE:
      return <LogoImageBrandOnly size={size} />;
    case NanoLogoVariant.IMAGE_BRAND_ONLY_BLACK:
      return <LogoImageBrandOnly fill={colors.primary.black} size={size} />;
    case NanoLogoVariant.IMAGE_BRAND_ONLY_WHITE:
      return <LogoImageBrandOnly fill={colors.primary.white} size={size} />;
    case NanoLogoVariant.IMAGE_BRAND_ONLY_RED:
      return <LogoImageBrandOnly fill={colors.primary.giantred} size={size} />;

    case NanoLogoVariant.ONE_LINER_BLUE:
      return <LogoOneLiner size={size} />;
    case NanoLogoVariant.ONE_LINER_BLACK:
      return <LogoOneLiner fill={colors.primary.black} size={size} />;
    case NanoLogoVariant.ONE_LINER_WHITE:
      return <LogoOneLiner fill={colors.primary.white} size={size} />;

    case NanoLogoVariant.TWO_LINER_BLUE:
      return <LogoTwoLiner size={size} />;
    case NanoLogoVariant.TWO_LINER_BLACK:
      return <LogoTwoLiner fill={colors.primary.black} size={size} />;
    case NanoLogoVariant.TWO_LINER_WHITE:
      return <LogoTwoLiner fill={colors.primary.white} size={size} />;

    default:
      break;
  }
};

/**
 * Unser Markenname bringt unsere Mission auf den Punkt: from Nano to Giant. Selbstbestimmt wachsen.
 * Der Name gesetzt in der Hausschrift in Kombination mit unserer Bildmarke – dem Transformierungspfeil –
 * verdichtet unser Credo in einem einfachen, klaren Bild: dem NanoGiants Logo.
 */

export const NanoLogo: FunctionComponent<NanoLogoProps> = (props) => {
  /**
   * Checks if the button should be disabled
   */
  const variant = props.variant || NanoLogoVariant.CLAIM_BLUE;
  const size = props.size || NanoLogoSize.MEDIUM;

  return (
    <NanoLogoWrapper {...props}>
      {getLogoComponent(variant, size)}
    </NanoLogoWrapper>
  );
};
