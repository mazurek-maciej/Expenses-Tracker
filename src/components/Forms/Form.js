import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import Select from "react-select";

import SelectComponent from "../Forms/Select";
import DatePickerComponent from "../Forms/DatePicker";
import InputComponent from "../Forms/Input";

const FinancesForm = styled.form`
  display: grid;
  width: 100%;
  max-width: 600px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px;
  align-items: stretch;
  grid-gap: 32px;
`;

class Form extends React.Component {
  state = {
    presentDate: new Date(),
    financeType: [
      { value: "Income", label: "Income" },
      { value: "Outcome", label: "Outcome" }
    ]
  };

  renderInputField = ({ input, label, meta }) => {
    return <InputComponent input={input} meta={meta} label={label} />;
  };

  renderSelect = props => {
    const selectedCategory = [];
    if (this.props.categories) {
      this.props.categories.map(category =>
        selectedCategory.push({
          value: category.category,
          label: category.category
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

  renderDatePicker = props => {
    console.log(props);
    return (
      <DatePickerComponent props={props} presentDate={this.state.presentDate} />
    );
  };

  onSubmit = formValues => {
    this.props.handleSubmit(formValues);
  };

  render() {
    return (
      <FinancesForm onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
          name="category"
          label="Select category"
          component={this.renderSelect}
          validateOn="change"
          validators={{
            required: val => val && val.length
          }}
          mapProps={{
            value: props => props.modelValue,
            onChange: props => props.onChange
          }}
        />
        <Field
          name="date"
          label="Select date"
          component={this.renderDatePicker}
        />
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
    errors.description = "You must enter description!";
  }
  if (isNaN(formValues.money)) {
    errors.money = "You must enter a number";
  }
  if (!formValues.category) {
    errors.category = "Select category!";
  }
  if (!formValues.financeTypes) {
    errors.financeTypes = "Select type!";
  }
  if (!formValues.date) {
    errors.date = "Select date!";
  }
  return errors;
};

export default reduxForm({
  form: "account",
  validate
})(Form);
