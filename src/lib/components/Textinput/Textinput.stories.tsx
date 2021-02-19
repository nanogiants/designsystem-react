import React, { useState } from 'react';

import { NanoTextinput } from './Textinput';

export default {
  title: 'Components/NanoTextInput',
};

export const Primary = () => {
  const [testInput, setTestTnput] = useState('');

  return (
    <NanoTextinput
      label="Label"
      value={testInput}
      required
      onChange={(e) => setTestTnput(e.target.value)}
    ></NanoTextinput>
  );
};
