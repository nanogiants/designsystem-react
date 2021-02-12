import React, {
  FunctionComponent,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import styled from 'styled-components';

import { colors } from '../../theme/colors';

export enum SharedButtonVariants {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

// Buttoncolors
const ButtonColorMap = {
  [SharedButtonVariants.PRIMARY]: colors.primary.nanoblue,
  [SharedButtonVariants.SECONDARY]: colors.primary.giantred,
};

const ButtonTextColorMap = {
  [SharedButtonVariants.PRIMARY]: colors.primary.white,
  [SharedButtonVariants.SECONDARY]: colors.primary.white,
};

// disabled
const ButtonDisabledColorMap = {
  [SharedButtonVariants.PRIMARY]: 'green',
  [SharedButtonVariants.SECONDARY]: 'green',
};
const ButtonTextDisabledColorMap = {
  [SharedButtonVariants.PRIMARY]: 'black',
  [SharedButtonVariants.SECONDARY]: 'black',
};

// active
const ButtonActiveColorMap = {
  [SharedButtonVariants.PRIMARY]: colors.primary.nanoblue,
  [SharedButtonVariants.SECONDARY]: colors.primary.giantred,
};

const ButtonActiveTextColorMap = {
  [SharedButtonVariants.PRIMARY]: colors.primary.white,
  [SharedButtonVariants.SECONDARY]: colors.primary.white,
};

interface ButtonProps {
  variant: SharedButtonVariants;
}

const Button = styled.button<ButtonProps>`
  display: block;
  min-width: 150px;
  border-radius: 8px;
  border: 0;
  padding: 15px 24px;
  font-weight: 400;
  font-size: 1.6rem;
  cursor: pointer;

  background-color: ${({ variant }) => ButtonColorMap[variant]};
  color: ${({ variant }) => ButtonTextColorMap[variant]};
  &:hover {
    opacity: 0.9;
  }

  :focus {
    outline: 0;
  }

  &:active {
    background-color: ${({ variant }) => ButtonActiveColorMap[variant]};
    color: ${({ variant }) => ButtonActiveTextColorMap[variant]};
    opacity: 1;
  }

  &:disabled {
    background-color: ${({ variant }) => ButtonDisabledColorMap[variant]};
    color: ${({ variant }) => ButtonTextDisabledColorMap[variant]};
    opacity: 1;
  }
`;

interface Props extends ButtonHTMLAttributes<{}> {
  variant?: SharedButtonVariants;
  children?: ReactNode;
}

export const NanoButton: FunctionComponent<Props> = (props) => {
  const variant = props.variant || SharedButtonVariants.PRIMARY;

  return (
    <Button {...props} variant={variant}>
      {props.children}
    </Button>
  );
};
