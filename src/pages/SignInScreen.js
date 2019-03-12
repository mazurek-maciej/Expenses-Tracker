import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import GoogleAuth from "../components/Authentication/GoogleAuth";

const SignInWraper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInScreen = props => {
  if (props.isSignedIn) return <Redirect to="/main" />;
  return (
    <SignInWraper>
      <GoogleAuth />
    </SignInWraper>
  );
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

SignInScreen.propTypes = {};

export default connect(mapStateToProps)(SignInScreen);
