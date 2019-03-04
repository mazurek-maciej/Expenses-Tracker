import React, {Component} from 'react';
import Layout from './layout';
import InputBills from './components/InputBills';
import ListOfBills from './components/ListOfBills';
import Categories from './components/Categories';

class App extends Component {
  render() {
    return (
      <Layout>
        <InputBills />
        <Categories />
        <ListOfBills />
      </Layout>
    );
  }
}

export default App;
