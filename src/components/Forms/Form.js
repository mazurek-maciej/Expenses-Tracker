import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import Select from 'react-select';

import SelectComponent from './Select';
import DatePickerComponent from './DatePicker';
import InputComponent from './Input';
import { device } from '../../theme/theme';

const FinancesForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 800px;
  width: 100%;
  @media ${device.mobileM} {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0 8px;
  }
`;
const CategoriesWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 16px 24px;
  border-radius: 16px;
  background-color: rgba(51, 51, 51, 0.3);
`;
const DescriptionWraper = styled(CategoriesWraper)`
  flex-direction: column;
  margin: 16px 0;
`;

class Form extends React.Component {
  state = {
    presentDate: new Date(),
    financeType: [
      { value: 'Income', label: 'Income' },
      { value: 'Outcome', label: 'Outcome' },
    ],
  };

  renderInputField = ({ input, label, meta }) => (
    <InputComponent input={input} meta={meta} label={label} />
  );

  renderSelect = props => {
    const selectedCategory = [];
    if (this.props.categories) {
      this.props.categories.map(category =>
        selectedCategory.push({
          value: category.category,
          label: category.category,
        })
      );
    }
    return (
      <SelectComponent
        props={props}
        options={props.types ? this.state.financeType : selectedCategory}
      />
    );
  };

  renderDatePicker = props => (
    <DatePickerComponent props={props} presentDate={this.state.presentDate} />
  );

  onSubmit = formValues => {
    this.props.handleSubmit(formValues);
  };

  render() {
    return (
      <FinancesForm onSubmit={this.onSubmit}>
        <CategoriesWraper>
          <Field
            name="category"
            label="Select category"
            component={this.renderSelect}
            validateOn="change"
            validators={{
              required: val => val && val.length,
            }}
            mapProps={{
              value: props => props.modelValue,
              onChange: props => props.onChange,
            }}
          />
        </CategoriesWraper>
        <DescriptionWraper>
          <Field
            name="description"
            component={this.renderInputField}
            label="Enter description"
          />
          <Field
            name="money"
            component={this.renderInputField}
            label="Enter value"
          />
          <Field
            name="financeTypes"
            label="Select finance type"
            types
            component={this.renderSelect}
          />
          <Field
            name="date"
            label="Select date"
            component={this.renderDatePicker}
          />
        </DescriptionWraper>
        <button className="button is-dark" type="submit">
          Submit
        </button>
      </FinancesForm>
    );
  }
}

const validate = formValues => {
  const errors = [];
  if (!formValues.description) {
    errors.description = 'You must enter description!';
  }
  if (isNaN(formValues.money)) {
    errors.money = 'You must enter a number';
  }
  if (!formValues.category) {
    errors.category = 'Select category!';
  }
  if (!formValues.financeTypes) {
    errors.financeTypes = 'Select type!';
  }
  if (!formValues.date) {
    errors.date = 'Select date!';
  }
  return errors;
};

export default reduxForm({
  form: 'account',
  validate,
})(Form);
