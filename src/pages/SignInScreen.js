import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GoogleAuth from "../components/Authentication/GoogleAuth";

const SignInWraper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInScreen = props => {
  return (
    <SignInWraper>
      <GoogleAuth />
    </SignInWraper>
  );
};

SignInScreen.propTypes = {};

export default SignInScreen;
