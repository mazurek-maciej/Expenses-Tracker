import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import SignInScreen from "./pages/SignInScreen";
import Main from "./pages/Main";
import FinanceOperations from "./pages/FinanceOperations";
import Navigation from "./components/Navigation";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});
const NavWraper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

class App extends Component {
  render() {
    return (
      <Router>
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
  }
}

export default App;
