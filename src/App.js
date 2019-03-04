import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './layout';
import MainPage from './pages/MainPage';
import AddBillsPage from './pages/AddBillsPage';

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <>
            <Route path="/" exact component={MainPage} />
            <Route path="/add" exact component={AddBillsPage} />
          </>
        </Router>
      </Layout>
    );
  }
}

export default App;
