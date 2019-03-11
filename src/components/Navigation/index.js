import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import GoogleAuth from "../Authentication/GoogleAuth";
import NavigationBar from "./NavigationBar";

class Index extends Component {
  render() {
    if (!this.props.isSignedIn) return <Redirect to="/" />;
    return (
      <div>
        <NavigationBar>
          <GoogleAuth />
        </NavigationBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(Index);
