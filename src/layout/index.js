import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../theme/theme';

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
const NavWraper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);
export default Layout;
