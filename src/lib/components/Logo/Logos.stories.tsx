import React from 'react';
import { colors } from '../../theme/colors';
import {
  NanoLogo,
  NanoLogoSize,
  NanoLogoVariant,
  Props as NanoLogoProps,
} from './Logo';

export default {
  title: 'Components/Logo',
  component: NanoLogo,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          NanoLogoVariant.CLAIM_BLUE,
          NanoLogoVariant.CLAIM_BLACK,
          NanoLogoVariant.CLAIM_WHITE,
          NanoLogoVariant.CLAIM_BLUE_RED,
          NanoLogoVariant.WORD_BRAND_ONLY_BLUE,
          NanoLogoVariant.WORD_BRAND_ONLY_BLACK,
          NanoLogoVariant.WORD_BRAND_ONLY_WHITE,
          NanoLogoVariant.IMAGE_BRAND_ONLY_BLUE,
          NanoLogoVariant.IMAGE_BRAND_ONLY_BLACK,
          NanoLogoVariant.IMAGE_BRAND_ONLY_WHITE,
          NanoLogoVariant.IMAGE_BRAND_ONLY_RED,
          NanoLogoVariant.ONE_LINER_BLUE,
          NanoLogoVariant.ONE_LINER_BLACK,
          NanoLogoVariant.ONE_LINER_WHITE,
          NanoLogoVariant.TWO_LINER_BLUE,
          NanoLogoVariant.TWO_LINER_BLACK,
          NanoLogoVariant.TWO_LINER_WHITE,
        ],
      },
    },
  },
};

const Template = (args: NanoLogoProps) => <NanoLogo {...args} />;

export const Logo = Template.bind({});

Logo.args = {
  variant: NanoLogoVariant.CLAIM_BLUE,
  size: NanoLogoSize.MEDIUM,
};

const SizesTemplate = (args: NanoLogoProps) => {
  return (
    <div>
      <NanoLogo {...args} size={NanoLogoSize.SMALL} />
      <NanoLogo {...args} size={NanoLogoSize.MEDIUM} />
      <NanoLogo {...args} size={NanoLogoSize.LARGE} />
    </div>
  );
};

export const Sizes = SizesTemplate.bind({});

Sizes.args = {
  variant: NanoLogoVariant.CLAIM_BLUE,
};

Sizes.parameters = {
  docs: {
    storyDescription: '3 sizes are supported.',
  },
};

Sizes.title = 'Components/Logo/Sizes';

Sizes.argTypes = {
  variant: {
    control: {
      type: 'select',
      options: [
        NanoLogoVariant.CLAIM_BLUE,
        NanoLogoVariant.CLAIM_BLACK,
        NanoLogoVariant.CLAIM_WHITE,
        NanoLogoVariant.CLAIM_BLUE_RED,
        NanoLogoVariant.WORD_BRAND_ONLY_BLUE,
        NanoLogoVariant.WORD_BRAND_ONLY_BLACK,
        NanoLogoVariant.WORD_BRAND_ONLY_WHITE,
        NanoLogoVariant.IMAGE_BRAND_ONLY_BLUE,
        NanoLogoVariant.IMAGE_BRAND_ONLY_BLACK,
        NanoLogoVariant.IMAGE_BRAND_ONLY_WHITE,
        NanoLogoVariant.IMAGE_BRAND_ONLY_RED,
        NanoLogoVariant.ONE_LINER_BLUE,
        NanoLogoVariant.ONE_LINER_BLACK,
        NanoLogoVariant.ONE_LINER_WHITE,
        NanoLogoVariant.TWO_LINER_BLUE,
        NanoLogoVariant.TWO_LINER_BLACK,
        NanoLogoVariant.TWO_LINER_WHITE,
      ],
    },
  },
  size: {
    control: false,
  },
};
