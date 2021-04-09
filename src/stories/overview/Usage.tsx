import React, { useState } from 'react';

import {
  NanoButton,
  NanoH1,
  NanoH2,
  NanoH3,
  NanoH4,
  NanoH5,
  NanoH6,
  NanoLogo,
  NanoTextInput,
} from '../../index';

import '../../lib/assets/fonts.css';

export const App = () => {
  const [testTextInputValue, setTestTextInputValue] = useState('');
  return (
    <div style={{ backgroundColor: 'white' }}>
      <NanoH1>HEADLINE</NanoH1>
      <NanoH2>HEADLINE2</NanoH2>
      <NanoH3>HEADLINE3</NanoH3>
      <NanoH3 variant="sharpgrotesk">HEADLINE3 Sharp</NanoH3>
      <NanoH4>HEADLINE4</NanoH4>
      <NanoH5>HEADLINE5</NanoH5>
      <NanoH6>HEADLINE6</NanoH6>
      <NanoButton>Button</NanoButton>
      <NanoButton disabled>Button</NanoButton>
      <NanoTextInput
        label="Label"
        value={testTextInputValue}
        onChange={(e) => setTestTextInputValue(e.target.value)}
      ></NanoTextInput>
      <NanoLogo></NanoLogo>
    </div>
  );
};
