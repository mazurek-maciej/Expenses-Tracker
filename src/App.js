import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import history from './routes/history';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import Finances from './components/Finances';
import FinancesList from './components/ListOfFinances';
import Navigation from './components/Navigation';
import Categories from './components/Categories';

const RouteContainer = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 },
});
const NavWraper = styled.div`
  position: sticky;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const App = () => (
  <Router>
    <>
      <Route
        render={({ location }) => (
          <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route path="/" exact component={FinancesList} />
                <Route path="/signIn" component={LoginScreen} />
                <Route path="/signUp" component={SignUpScreen} />
                <Route path="/new-finance" component={Finances} />
                <Route path="/new-category" component={Categories} />
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

export default App;
