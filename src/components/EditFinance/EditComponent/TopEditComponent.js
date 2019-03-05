import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

const TopWraper = styled.div`
  display: flex;
  width: 100%;
`;
const InputsWraper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const StyledSelect = styled(Select)`
  width: 80%;
  margin: 8px;
  font-size: 16px;
  color: black;
`;
const StyledDatePicker = styled(DatePicker)`
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  margin: 8px;
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
        <StyledDatePicker
          selected={date}
          onChange={handleChangeDate}
          dateFormat="MMMM d, yyyy"
        />
        <StyledSelect options={categoriesSelect} onChange={handleCategories} />
      </InputsWraper>
    </TopWraper>
  );
};

export default TopEditComponent;
