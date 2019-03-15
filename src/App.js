import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import { connect } from 'react-redux';
import history from './routes/history';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import Finances from './components/Finances';
import FinancesList from './components/ListOfFinances';
import Navigation from './components/Navigation';

const RouteContainer = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 },
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
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={FinancesList} />
          <Route path="/signIn" component={LoginScreen} />
          <Route path="/signUp" component={SignUpScreen} />
          <Route path="/newFinance" component={Finances} />
        </Switch>
        <Navigation />
      </>
    </Router>
  );
};

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps)(App);
