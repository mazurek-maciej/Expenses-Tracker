import React from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import {Done} from 'styled-icons/material/Done';

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
`;
const SubmitButton = styled.button`
  color: #f9f9f9;
  background-color: transparent;
  padding: 4px 8px;
  border-radius: 4px;
  width: 80px;
  margin: 4px;
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
const BottomWraper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const StyledDone = styled(Done)`
  width: 32px;
  color: #f9f9f9;
`;

const EditComponent = ({
  handleSubmit,
  handleChangeDate,
  bills,
  date,
  getDesc,
  getMoney,
}) => {
  return (
    <EditForm onSubmit={handleSubmit}>
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
      <BottomWraper>
        <SubmitButton type="submit">
          <StyledDone />
        </SubmitButton>
        <DatePicker
          selected={date}
          onChange={handleChangeDate}
          dateFormat="MMMM d, yyyy"
        />
      </BottomWraper>
    </EditForm>
  );
};
export default EditComponent;
