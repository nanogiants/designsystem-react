import { createGlobalStyle, css } from 'styled-components';

import '../../assets/style/index.css';

export const bodyStyles = css`
  /* same as before */
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
