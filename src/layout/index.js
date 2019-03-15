import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../theme/theme';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    font-family: Source Sans Pro;
    background-color: ${theme.colors.$D2};
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
