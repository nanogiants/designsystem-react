import React, { useState, ReactElement } from 'react';
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

const Value = styled.div`
  font-family: SharpGrotesk;
  width: 100%;
  display: flex;
  justify-content: space-between;
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

interface Props<T> {
  label: string;
  error?: string;
  width?: string;
  value: T | null | undefined;
  values: {
    key: string;
    value: T;
  }[];
  onChange: (value: T) => void;
}

const Arrow = () => (
  <svg
    width="18"
    height="10"
    viewBox="0 0 18 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.99995 9.49995C8.80795 9.49995 8.61595 9.42645 8.4697 9.2802L0.439453 1.24995L1.49995 0.189453L8.99995 7.68945L16.5 0.189453L17.5605 1.24995L9.5302 9.2802C9.38395 9.42645 9.19195 9.49995 8.99995 9.49995Z"
      fill="#222B45"
    />
  </svg>
);

export const NanoDropdown: <T = string>(
  props: Props<T>
) => ReactElement<Props<T>> = (props) => {
  const { error, label, width, value, values, onChange } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <InputContainer width={width}>
      <Inner error={Boolean(error)}>
        <Value onClick={() => setOpen(!isOpen)}>
          <span>{value}</span>
          <Arrow />
        </Value>
        <Label hasContent={value !== undefined && value !== null} error={error}>
          {label}
        </Label>
      </Inner>
      {isOpen && (
        <Options>
          {values.map(({ key, value }, i) => (
            <div key={i} onClick={() => onChange(value)}>
              {key}
            </div>
          ))}
        </Options>
      )}

      {error && <Error>{error}</Error>}
    </InputContainer>
  );
};

const Options = styled.div`
  position: absolute;
  width: 100%;
  background-color: #ffffff;

  border-radius: 4px;
  z-index: 9;
  margin-top: 10px;
  max-height: 220px;
  overflow: auto;
  .option {
    cursor: pointer;
    padding: 12px 16px;
    user-select: none;
  }
`;
