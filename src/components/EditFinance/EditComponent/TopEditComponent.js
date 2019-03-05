import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

const TopWraper = styled.div`
  display: flex;
  width: 100%;
`;
const InputsWraper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const InputValue = styled.input`
  padding: 4px 8px;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom: 1px solid #f9f9f9;
  color: #f9f9f9;
  width: 100%;
  margin-bottom: 8px;
  :focus {
    border: 1px solid #f9f9f9;
  }
`;

const TopEditComponent = ({
  bills,
  getDesc,
  getMoney,
  handleCategories,
  handleChangeDate,
  categoriesSelect,
  date,
}) => {
  return (
    <TopWraper>
      <InputsWraper>
        <InputValue
          defaultValue={bills.description}
          type="text"
          placeholder="Enter new description"
          ref={getDesc}
        />
        <InputValue
          defaultValue={bills.amountOfMoney}
          type="text"
          placeholder="Enter new amount of money"
          ref={getMoney}
        />
      </InputsWraper>
      <InputsWraper>
        <DatePicker
          selected={date}
          onChange={handleChangeDate}
          dateFormat="MMMM d, yyyy"
        />
        <Select options={categoriesSelect} onChange={handleCategories} />
      </InputsWraper>
    </TopWraper>
  );
};

export default TopEditComponent;
