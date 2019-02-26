import {ThemeProvider, createGlobalStyle} from 'styled-components';
import React from 'react';
import {theme} from '../theme/theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: Source Sans Pro;
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
