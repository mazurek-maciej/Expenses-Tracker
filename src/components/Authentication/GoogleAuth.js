import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, Redirect } from "react-router-dom";
import { signIn, signOut } from "../../actions/authActions";
import AuthButton from "./AuthButton";

const GoogleAuthWraper = styled.div`
  display: flex;
  flex-direction: column;
`;

export class GoogleAuth extends Component {
  componentDidMount = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "80449305931-6skpi7im8o1qkuag0ek7u7kqv80362fe.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(
            this.auth.isSignedIn.get(),
            this.auth.currentUser.get().getId()
          );
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return <div>Can't get authentication status</div>;
    } else if (this.props.isSignedIn) {
      return <AuthButton onClick={this.onSignOutClick} />;
    } else {
      return <AuthButton title="Sign In" icon onClick={this.onSignInClick} />;
    }
  };

  onAuthChange = (isSignedIn, userId) => {
    if (isSignedIn) {
      this.props.signIn(userId);
    } else {
      this.props.signOut(userId);
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    return <GoogleAuthWraper>{this.renderAuthButton()}</GoogleAuthWraper>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signIn, signOut }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleAuth);
