import { createGlobalStyle, css } from 'styled-components';

import '../../assets/fonts.css';

export const bodyStyles = css`
  /* same as before */
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;
