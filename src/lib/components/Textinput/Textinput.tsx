import React, {
  FunctionComponent,
  InputHTMLAttributes,
  FocusEvent,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../../theme/colors';

const OFFSET_LEFT = 12;

interface InputContainerProps {
  width?: string;
}

const InputContainer = styled.div<InputContainerProps>`
  width: ${({ width }) => width || '240px'};
  margin: 0 0 12px 0;
  position: relative;
`;

interface InnerProps {
  focussed?: boolean;
  error?: boolean;
}

const Inner = styled.div<InnerProps>`
  position: relative;
  padding: 16px 12px 8px ${OFFSET_LEFT}px;
  border-bottom: ${({ focussed, error }) =>
    `2px solid ${
      focussed
        ? error
          ? colors.secondary.titanred
          : colors.secondary.microblue
        : colors.secondary.rapidgrey
    }`};
`;

const Input = styled.input`
  font-family: SharpGrotesk;
  width: 100%;
  background-color: transparent;
  border: 0;
  color: ${colors.primary.black};
  font-size: 16px;
  line-height: 26px;
  :active,
  :focus {
    outline: none;
  }
`;

const Label = styled.label<any>`
  position: absolute;
  top: 16px;
  left: ${OFFSET_LEFT + 2}px;
  color: ${({ error }) =>
    error ? colors.secondary.titanred : colors.secondary.rapidgrey};
  pointer-events: none;
  transition: transform 0.2s;

  font-family: SharpGrotesk;
  font-size: 16px;
  line-height: 26px;

  ${({ required, hasContent }) =>
    required && !hasContent
      ? css`
          &:after {
            content: '*';
            color: ${colors.primary.giantred};
          }
        `
      : ''}

  ${({ hasContent }) =>
    hasContent &&
    css`
      transform: translateY(-10px);
      font-size: 10px;
      line-height: 16px;
      font-weight: bold;
    `}
`;

const Error = styled.div`
  font-family: SharpGrotesk;
  margin: 4px 0 0 14px;
  color: ${colors.primary.giantred};
  font-size: 10px;
  line-height: 16px;
  font-weight: bold;
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
  width?: string;
}

export const NanoTextinput: FunctionComponent<Props> = (props: Props) => {
  const {
    error,
    label,
    required,
    width,
    onFocus,
    onBlur,
    ...inputProps
  } = props;
  const [focussed, setFocussed] = useState(false);

  const focus = (e: FocusEvent<HTMLInputElement>) => {
    setFocussed(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const blur = (e: FocusEvent<HTMLInputElement>) => {
    setFocussed(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <InputContainer width={width}>
      <Inner focussed={focussed} error={Boolean(error)}>
        <Input {...inputProps} onFocus={focus} onBlur={blur} />
        <Label
          hasContent={props.value || false}
          error={error}
          required={required}
        >
          {label}
        </Label>
      </Inner>
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
};
