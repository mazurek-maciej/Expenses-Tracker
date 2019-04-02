import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import history from './routes/history';
import StoreProvider from './store';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import Finances from './components/Finances';
import FinancesList from './components/ListOfFinances';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import EditFinance from './components/EditFinance';
import AccountManage from './components/AccountManage';

const RouteContainer = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 },
});
const NavWrapper = styled.div`
  position: sticky;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const App = () => (
  <StoreProvider>
    <Router>
      <>
        <Route
          render={({ location }) => (
            <PoseGroup>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route path="/" exact component={FinancesList} />
                  <Route path="/account" component={AccountManage} />
                  <Route path="/signIn" component={LoginScreen} />
                  <Route path="/signUp" component={SignUpScreen} />
                  <Route path="/new-finance" component={Finances} />
                  <Route path="/new-category" component={Categories} />
                  <Route path="/edit/:id" component={EditFinance} />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          )}
        />
        <NavWrapper>
          <Navigation />
        </NavWrapper>
      </>
    </Router>
  </StoreProvider>
);

export default App;
