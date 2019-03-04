import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputsWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormWraper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const CreateBillForm = ({
  handleChangeDate,
  handleInput,
  handleSubmit,
  description,
  newDate,
  amountOfMoney,
}) => {
  return (
    <InputsWraper>
      <FormWraper onSubmit={handleSubmit}>
        <div className="field">
          <input
            className="input"
            onChange={handleInput}
            type="text"
            value={description}
            placeholder="Description"
            id="description"
          />
        </div>
        <div className="field">
          <input
            className="input"
            onChange={handleInput}
            type="text"
            value={amountOfMoney}
            placeholder="Amount of money"
            id="amountOfMoney"
          />
        </div>
        <div className="field">
          <DatePicker
            selected={newDate}
            onChange={handleChangeDate}
            dateFormat="MMMM d, yyyy"
          />
        </div>
        <input className="button" type="submit" value="submit" />
      </FormWraper>
    </InputsWraper>
  );
};

export default CreateBillForm;
