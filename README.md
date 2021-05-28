# Nanogiants React Component Library

This Repository contains the Nanogiants CI Components which can be used in any React Project.
For a preview you can see all components in the [Storybook](https://nanogiants.github.io/designsystem-react).

# Contributing
## Grid
To develop on the grid system, the sass files in the grid folder can be edited and compiled with the following command:

```bash
sass --watch src/lib/components/Grid/bootstrap-grid.scss:src/lib/components/Grid/bootstrap-grid.css
```

# Usage

```bash
npm i @nanogiants/designsystem-react
```

In your App:

```tsx
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
} from '@nanogiants/designsystem-react';
import '@nanogiants/designsystem-react/assets/fonts.css';
function App() {
  const [testTextInputValue, setTestTextInputValue] = useState('');

  return (
    <div>
      <NanoH1>HEADLINE</NanoH1>
      <NanoH2>HEADLINE2</NanoH2>
      <NanoH3>HEADLINE3</NanoH3>
      <NanoH3 variant='sharpgrotesk'>HEADLINE3 Sharp</NanoH3>
      <NanoH4>HEADLINE4</NanoH4>
      <NanoH5>HEADLINE5</NanoH5>
      <NanoH6>HEADLINE6</NanoH6>
      <NanoButton disabled>Button</NanoButton>
      <NanoTextInput
        label='Label'
        value={testTextInputValue}
        onChange={(e) => setTestTextInputValue(e.target.value)}
      ></NanoTextInput>
      <NanoLogo></NanoLogo>
    </div>
  );
}
```
