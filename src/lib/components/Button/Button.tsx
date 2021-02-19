import React, {
  FunctionComponent,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../../theme/colors';

export enum NanoButtonVariants {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  PRIMARY_INVERSE = 'PRIMARY_INVERSE',
  SECONDARY_INVERSE = 'SECONDARY_INVERSE',
}

type NanoButtonSizes = 'sm' | 'md' | 'lg';

// Buttoncolors
const ButtonColorMap = {
  [NanoButtonVariants.PRIMARY]: colors.primary.nanoblue,
  [NanoButtonVariants.SECONDARY]: colors.primary.giantred,
  [NanoButtonVariants.PRIMARY_INVERSE]: 'transparent',
  [NanoButtonVariants.SECONDARY_INVERSE]: 'transparent',
};

const ButtonTextColorMap = {
  [NanoButtonVariants.PRIMARY]: colors.primary.white,
  [NanoButtonVariants.SECONDARY]: colors.primary.white,
  [NanoButtonVariants.PRIMARY_INVERSE]: colors.primary.nanoblue,
  [NanoButtonVariants.SECONDARY_INVERSE]: colors.primary.giantred,
};

// disabled
const ButtonDisabledColorMap = {
  [NanoButtonVariants.PRIMARY]: colors.secondary.rapidgrey,
  [NanoButtonVariants.SECONDARY]: colors.secondary.rapidgrey,
  [NanoButtonVariants.PRIMARY_INVERSE]: colors.primary.white,
  [NanoButtonVariants.SECONDARY_INVERSE]: colors.primary.white,
};
const ButtonTextDisabledColorMap = {
  [NanoButtonVariants.PRIMARY]: colors.secondary.slowgrey,
  [NanoButtonVariants.SECONDARY]: colors.secondary.slowgrey,
  [NanoButtonVariants.PRIMARY_INVERSE]: colors.secondary.slowgrey,
  [NanoButtonVariants.SECONDARY_INVERSE]: colors.secondary.slowgrey,
};

// active
const ButtonActiveColorMap = {
  [NanoButtonVariants.PRIMARY]: colors.secondary.picoblue,
  [NanoButtonVariants.SECONDARY]: colors.secondary.titanred,
  [NanoButtonVariants.PRIMARY_INVERSE]: 'transparent',
  [NanoButtonVariants.SECONDARY_INVERSE]: 'transparent',
};

const ButtonActiveTextColorMap = {
  [NanoButtonVariants.PRIMARY]: colors.primary.white,
  [NanoButtonVariants.SECONDARY]: colors.primary.white,
  [NanoButtonVariants.PRIMARY_INVERSE]: colors.secondary.picoblue,
  [NanoButtonVariants.SECONDARY_INVERSE]: colors.secondary.titanred,
};

export interface NanoButtonProps extends ButtonHTMLAttributes<{}> {
  variant?: NanoButtonVariants;
  size?: NanoButtonSizes;
  icon?: ReactNode;
  children?: ReactNode;
}

export const NanoButton: FunctionComponent<NanoButtonProps> = (props) => {
  const { variant, icon, size, ...rest } = props;
  const usedVariant = variant || NanoButtonVariants.PRIMARY;
  const usedSize = size || 'md';

  const isInverse = [
    NanoButtonVariants.PRIMARY_INVERSE,
    NanoButtonVariants.SECONDARY_INVERSE,
  ].includes(variant);

  if (icon && isInverse) {
    console.warn('Inverse Buttons do not support icons');
  }

  return (
    <Button {...rest} variant={usedVariant} size={usedSize}>
      {icon && !isInverse && (
        <IconContainer size={usedSize}>{icon}</IconContainer>
      )}
      {props.children}
    </Button>
  );
};

interface ButtonProps {
  variant: NanoButtonVariants;
  size: NanoButtonSizes;
}

const Button = styled.button<ButtonProps>`
  font-family: SharpGroteskBook19;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: ${({ variant }) => {
    if (
      [
        NanoButtonVariants.PRIMARY_INVERSE,
        NanoButtonVariants.SECONDARY_INVERSE,
      ].includes(variant)
    ) {
      return `1px solid ${ButtonTextColorMap[variant]}`;
    }
    return 0;
  }};
  padding: ${({ size }) => {
    if (size === 'sm') {
      return '12px 24px';
    }
    if (size === 'md') {
      return '14px 24px';
    }
    if (size === 'lg') {
      return '14px 24px';
    }
  }};
  font-weight: 400;
  font-size: ${({ size }) => {
    if (size === 'sm') {
      return '16px';
    }
    if (size === 'md') {
      return '18px';
    }
    if (size === 'lg') {
      return '20px';
    }
  }};
  cursor: pointer;
  outline: 0;
  background-color: ${({ variant }) => ButtonColorMap[variant]};
  color: ${({ variant }) => ButtonTextColorMap[variant]};

  &:active {
    background-color: ${({ variant }) => ButtonActiveColorMap[variant]};
    color: ${({ variant }) => ButtonActiveTextColorMap[variant]};
    ${({ variant }) => {
      if (
        [
          NanoButtonVariants.PRIMARY_INVERSE,
          NanoButtonVariants.SECONDARY_INVERSE,
        ].includes(variant)
      ) {
        return css`
          box-shadow: 0 0 10px ${colors.secondary.slowgrey};
          text-shadow: 0 0 8px ${colors.secondary.slowgrey};
        `;
      }
      return '';
    }};
  }

  &:disabled {
    background-color: ${({ variant }) => ButtonDisabledColorMap[variant]};
    color: ${({ variant }) => ButtonTextDisabledColorMap[variant]};
    border: ${({ variant }) => {
      if (
        [
          NanoButtonVariants.PRIMARY_INVERSE,
          NanoButtonVariants.SECONDARY_INVERSE,
        ].includes(variant)
      ) {
        return `1px solid ${ButtonTextDisabledColorMap[variant]}`;
      }
      return 0;
    }};
  }
`;

const IconContainer = styled.div<{ size: NanoButtonSizes }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: ${({ size }) => {
    if (size === 'sm') {
      return '24px';
    }
    if (size === 'md') {
      return '28px';
    }
    if (size === 'lg') {
      return '32px';
    }
  }};
  height: ${({ size }) => {
    if (size === 'sm') {
      return '24px';
    }
    if (size === 'md') {
      return '28px';
    }
    if (size === 'lg') {
      return '32px';
    }
  }};
`;
