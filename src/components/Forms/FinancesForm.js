import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SelectComponent from './Select';
import DatePickerComponent from './DatePicker';
import InputComponent from './Input';
import Button from '../Buttons/Button';
import { device } from '../../theme/theme';

const FinancesForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 800px;
  width: 100%;
  padding: 1.5rem;
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
  background-color: ${({ theme }) => theme.colors.$grayBg};
`;
const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
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
        <ButtonsContainer>
          <Button type="submit">Submit</Button>
          <Button secondary>
            <Link to="/new-category">Category</Link>
          </Button>
        </ButtonsContainer>
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
