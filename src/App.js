import React, { Component } from "react";
import styled from "styled-components";
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import { connect } from "react-redux";
import history from "./routes/history";
import SignInScreen from "./pages/SignInScreen";
import Main from "./pages/Main";
import FinanceOperations from "./pages/FinanceOperations";
import Navigation from "./components/Navigation";

const RouteContainer = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 }
});
const NavWraper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const App = props => {
  const { isSignedIn } = props;

  return (
    <Router history={history}>
      <>
        <Route
          render={({ location }) => (
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route path="/" exact component={SignInScreen} />
                  <Route path="/main" component={Main} />
                  <Route path="/add" component={FinanceOperations} />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          )}
        />
        <NavWraper>
          <Navigation />
        </NavWraper>
      </>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(App);
