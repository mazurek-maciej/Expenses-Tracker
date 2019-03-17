import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

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
const DescriptionWrapper = styled.div`
  display: flex;
  margin: 16px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 16px 24px;
  border-radius: 16px;
  background-color: rgba(51, 51, 51, 0.3);
`;
const SubmitButton = styled.button`
  align-self: flex-start;
  margin: 0 16px;
  width: 100px;
  height: 36px;
  border-radius: 8px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
  border: solid 1px #6ba5b3;
  background-color: #333333;
  color: ${({ theme }) => theme.colors.$D12};
  font-size: ${({ theme }) => theme.size.$normal};
`;
const LinkButton = styled(SubmitButton)`
  border: 1px solid ${({ theme }) => theme.colors.$D4};
  a {
    color: ${({ theme }) => theme.colors.$D12};
  }
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
    const { categories } = this.props;
    const categoriesArray = [];
    if (Object.keys(categories).length !== 0) {
      const categoriesPlaceholder = _.values(categories);
      categoriesPlaceholder.map(category =>
        categoriesArray.push({
          value: category.value,
          label: category.value,
        })
      );
    }
    return (
      <SelectComponent
        props={props}
        options={props.types ? this.state.financeType : categoriesArray}
      />
    );
  };

  renderInputCategory = ({ input, meta, label }) => (
    <InputComponent input={input} meta={meta} label={label} />
  );

  renderDatePicker = props => (
    <DatePickerComponent props={props} presentDate={this.state.presentDate} />
  );

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { categories } = this.props;
    return (
      <FinancesForm onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <DescriptionWrapper>
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
            categories={categories}
            validateOn="change"
            validators={{
              required: val => val && val.length,
            }}
            mapProps={{
              value: props => props.modelValue,
              onChange: props => props.onChange,
            }}
          />
          <Field
            name="date"
            label="Select date"
            component={this.renderDatePicker}
          />
        </DescriptionWrapper>
        <div>
          <SubmitButton type="submit">Submit</SubmitButton>
          <LinkButton>
            <Link to="/new-category">Category</Link>
          </LinkButton>
        </div>
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

Form.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'account',
  validate,
})(Form);
