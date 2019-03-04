import React from 'react';
import {Link} from 'react-router-dom';
import Categories from '../components/Categories';
import InputBills from '../components/InputBills';

const AddBillsPage = () => {
  return (
    <div>
      <Link to="/">Main</Link>
      <InputBills />
      <Categories />
    </div>
  );
};
export default AddBillsPage;
