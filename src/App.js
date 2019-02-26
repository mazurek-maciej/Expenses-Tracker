import React, {Component} from 'react';
import Layout from './layout';
import InputBills from './components/InputBills';
import ListOfBills from './components/ListOfBills';

class App extends Component {
  render() {
    return (
      <Layout>
        <InputBills />
        <ListOfBills />
      </Layout>
    );
  }
}

export default App;
