import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

import { NanoButton, NanoButtonProps, NanoButtonVariants } from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
};

const Template: Story<NanoButtonProps> = (args) => (
  <>
    <ButtonContainer>
      <NanoButton {...args} />
    </ButtonContainer>
    <ButtonContainer>
      <NanoButton {...args} icon={<Arrow stroke="white" fill="white" />} />
    </ButtonContainer>
  </>
);

export const Primary: Story<NanoButtonProps> = Template.bind({});

Primary.args = {
  variant: NanoButtonVariants.PRIMARY,
  children: 'Button',
  size: 'md',
};

export const Secondary: Story<NanoButtonProps> = Template.bind({});

Secondary.args = {
  variant: NanoButtonVariants.SECONDARY,
  children: 'Button',
  size: 'md',
};

const ButtonContainer = styled.div`
  margin-bottom: 16px;
`;

const InverseTemplate: Story<NanoButtonProps> = (args) => (
  <ButtonContainer>
    <NanoButton {...args} />
  </ButtonContainer>
);

export const PrimaryInverse: Story<NanoButtonProps> = InverseTemplate.bind({});

PrimaryInverse.args = {
  variant: NanoButtonVariants.PRIMARY_INVERSE,
  children: 'Button',
  size: 'md',
};

export const SecondaryInverse: Story<NanoButtonProps> = InverseTemplate.bind(
  {}
);

SecondaryInverse.args = {
  variant: NanoButtonVariants.SECONDARY_INVERSE,
  children: 'Button',
  size: 'md',
};
