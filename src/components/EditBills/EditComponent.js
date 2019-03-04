import React from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
`;
const SubmitButton = styled.input`
  color: #f9f9f9;
  background-color: hsla(0, 0%, 25%, 1);
  padding: 4px 8px;
  border-radius: 4px;
  width: 80px;
`;
const InputValue = styled.input`
  padding: 4px 8px;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom: 1px solid #f9f9f9;
  color: #f9f9f9;
  width: 100%;
  margin-bottom: 4px;
  :focus {
    border: 1px solid #f9f9f9;
  }
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
      <DatePicker
        selected={date}
        onChange={handleChangeDate}
        dateFormat="MMMM d, yyyy"
      />
      <SubmitButton type="submit" placeholder="Update bill" />
    </EditForm>
  );
};
export default EditComponent;
