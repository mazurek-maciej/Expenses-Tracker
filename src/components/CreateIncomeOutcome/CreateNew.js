import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
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
  handleIncomeTypeChange,
  handleCategories,
  newDate,
  content,
  selectedTypes,
  selectedCategory,
  categoriesList,
  moneyRef,
  descRef,
}) => {
  const incomeTypes = [
    {value: 'Income', label: 'Income'},
    {value: 'Outcome', label: 'Outcome'},
  ];
  const categoriesSelect = [];
  categoriesList.map(cat =>
    categoriesSelect.push({value: cat.category, label: cat.category}),
  );
  return (
    <InputsWraper>
      <FormWraper onSubmit={handleSubmit}>
        <div className="field">
          <input
            className="input"
            onChange={handleInput}
            type="text"
            value={content.description}
            placeholder="Description"
            ref={descRef}
          />
        </div>
        <div className="field">
          <input
            className="input"
            onChange={handleInput}
            type="text"
            value={content.amountOfMoney}
            placeholder="Amount of money"
            ref={moneyRef}
          />
        </div>
        <Select
          options={incomeTypes}
          value={selectedTypes}
          onChange={handleIncomeTypeChange}
        />
        <Select
          options={categoriesSelect}
          value={selectedCategory}
          onChange={handleCategories}
        />
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
