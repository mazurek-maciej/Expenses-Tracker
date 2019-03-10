import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './layout';
import SignInScreen from './pages/SignInScreen';
import Main from './pages/Main';
import FinanceOperations from './pages/FinanceOperations';

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <>
            <Route path="/" exact component={SignInScreen} />
            <Route path="/main" component={Main} />
            <Route path="/add" exact component={FinanceOperations} />
          </>
        </Router>
      </Layout>
    );
  }
}

export default App;
