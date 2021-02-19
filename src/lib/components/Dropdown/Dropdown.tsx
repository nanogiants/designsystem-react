import React, { useState, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { colors } from '../../theme/colors';

const OFFSET_LEFT = 12;

interface InputContainerProps {
  width?: string;
}

const InputContainer = styled.div<InputContainerProps>`
  width: ${({ width }) => width || '240px'};
  height: 63px;
  position: relative;
`;

interface InnerProps {
  hasValue?: boolean;
  error?: boolean;
}

interface StyledArrowProps {
  isOpen: boolean;
}
const StyledArrow = styled(Arrow)<StyledArrowProps>`
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
  transition: all 0.2s;
`;

const Inner = styled.div<InnerProps>`
  cursor: pointer;

  position: relative;
  margin-top: 10px;
  height: 34px;
  border-bottom: ${({ hasValue, error }) =>
    `2px solid ${
      hasValue
        ? error
          ? colors.secondary.titanred
          : colors.secondary.microblue
        : colors.secondary.rapidgrey
    }`};
`;

const Value = styled.div`
  font-family: SharpGrotesk;
  padding-left: ${OFFSET_LEFT + 2}px;
  padding-right: 12px;
  height: 100%;
  display: flex;
  align-items: center;
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
  top: 2px;
  left: ${OFFSET_LEFT + 2}px;
  color: ${({ error }) =>
    error ? colors.secondary.titanred : colors.secondary.rapidgrey};
  pointer-events: none;
  transition: transform 0.2s;

  font-family: SharpGrotesk;
  font-size: 16px;
  line-height: 26px;

  ${({ required }) =>
    required
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
      transform: translateY(-12px);
      font-size: 12px;
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

export interface NanoDropdownProps<T> {
  label: string;
  error?: string;
  width?: string;
  required?: boolean;
  value: T | null | undefined;
  values: {
    key: string;
    value: T;
  }[];
  onChange: (value: T) => void;
}

export const NanoDropdown: <T = string>(
  props: NanoDropdownProps<T>
) => ReactElement<NanoDropdownProps<T>> = (props) => {
  const { error, label, required, width, value, values, onChange } = props;
  const [isOpen, setOpen] = useState(false);

  const hasValue = value !== undefined && value !== null;

  const selectedKey = values.find((val) => val.value === value)?.key || '';

  return (
    <InputContainer width={width}>
      <Inner error={Boolean(error)} hasValue={hasValue}>
        <Value onClick={() => setOpen(!isOpen)}>
          <span>{selectedKey}</span>
          <StyledArrow
            isOpen={isOpen}
            stroke={
              hasValue && Boolean(error)
                ? colors.secondary.titanred
                : colors.secondary.microblue
            }
          />
        </Value>
        <Label hasContent={hasValue} error={error} required={required}>
          {label}
        </Label>

        <Options isOpen={isOpen}>
          {values.map(({ key, value }, i) => (
            <OptionItem
              key={i}
              onClick={() => {
                setOpen(false);
                onChange(value);
              }}
            >
              {key}
            </OptionItem>
          ))}
        </Options>
      </Inner>

      {error && <Error>{error}</Error>}
    </InputContainer>
  );
};

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid ${colors.secondary.rapidgrey};
  padding-left: ${OFFSET_LEFT}px;
  width: calc(100% - ${OFFSET_LEFT}px);
`;

interface OptionProps {
  isOpen: boolean;
}

const Options = styled.div<OptionProps>`
  position: absolute;
  width: 100%;
  background-color: #ffffff;
  /* background-color: black; */
  border-radius: 0 0 4px 4px;
  z-index: 9;
  margin-top: 2px;
  transition: max-height 0.2s;
  max-height: ${({ isOpen }) => (isOpen ? '220px' : 0)};
  overflow: auto;
  scrollbar-width: 0;
`;
