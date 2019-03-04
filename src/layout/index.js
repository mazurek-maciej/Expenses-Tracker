import {ThemeProvider, createGlobalStyle} from 'styled-components';
import React from 'react';
import {theme} from '../theme/theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    font-family: Source Sans Pro;
    background-color: #1A1A1A;
    *, *::before, *::after {
      box-sizing: border-box;
    }
  }
`;

const Layout = ({children}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);
export default Layout;
