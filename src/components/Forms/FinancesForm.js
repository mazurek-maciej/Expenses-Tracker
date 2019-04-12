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

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%:
`;
const FinancesForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.$grayBg};
  padding: 1.5rem;
  border-radius: 8px;
  @media ${device.mobileM} {
    width: 100%;
    margin: 0 8px;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1.5rem 0;
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

  categoryField = (category, array, props) => {
    if (Object.keys(category).length !== 0) {
      const categoriesPlaceholder = _.values(category);
      categoriesPlaceholder.map(element =>
        array.push({
          value: element.value,
          label: element.value,
        })
      );
    }
    return <SelectComponent props={props} options={array} />;
  };

  walletField = (wallet, array, props) => {
    if (wallet) {
      const walletsPlaceholder = _.values(wallet);
      walletsPlaceholder.map(element =>
        array.push({
          value: element.name,
          label: element.name,
          id: element._id,
          status: element.value,
        })
      );
    }
    return <SelectComponent props={props} options={array} />;
  };

  renderSelect = props => {
    const { categories, wallets } = this.props;
    const categoriesArray = [];
    const walletsArray = [];
    if (props.category) {
      return this.categoryField(categories, categoriesArray, props);
    }
    if (props.wallet) {
      return this.walletField(wallets, walletsArray, props);
    }
    return <SelectComponent props={props} options={this.state.financeType} />;
  };

  renderInputCategory = ({ input, meta, label }) => (
    <InputComponent input={input} meta={meta} label={label} />
  );

  renderDatePicker = props => (
    <DatePickerComponent props={props} presentDate={this.state.presentDate} />
  );

  checkFieldToEditWallet = (field, toEditFunc) => {
    let newWalletValue = '';
    field.financeType.label === 'Income'
      ? (newWalletValue = +field.wallets.status + +field.value)
      : (newWalletValue = +field.wallets.status - +field.value);
    toEditFunc(field.wallets.id, {
      name: field.wallets.label,
      value: newWalletValue,
    });
  };

  onSubmit = formValues => {
    const { onSubmit, editWallet } = this.props;
    onSubmit(formValues);
    this.checkFieldToEditWallet(formValues, editWallet);
  };

  render() {
    const { categories, handleSubmit } = this.props;
    return (
      <FormWrapper>
        <FinancesForm onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="description"
            component={this.renderInputField}
            label="Enter description"
          />
          <Field
            name="value"
            component={this.renderInputField}
            label="Enter value"
          />
          <Field
            name="financeType"
            label="Select finance type"
            types
            component={this.renderSelect}
          />
          <Field
            wallet
            name="wallets"
            label="Select wallet"
            component={this.renderSelect}
          />
          <Field
            category
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
          <ButtonsContainer>
            <Button type="submit">Submit</Button>
            <Button secondary>
              <Link to="/new-category">Category</Link>
            </Button>
          </ButtonsContainer>
        </FinancesForm>
      </FormWrapper>
    );
  }
}

const validate = formValues => {
  const errors = [];
  if (!formValues.description) {
    errors.description = 'You must enter description!';
  }
  if (isNaN(formValues.value)) {
    errors.value = 'You must enter a number';
  }
  if (!formValues.category) {
    errors.category = 'Select category!';
  }
  if (!formValues.financeType) {
    errors.financeType = 'Select type!';
  }
  if (!formValues.date) {
    errors.date = 'Select date!';
  }
  return errors;
};

Form.propTypes = {
  categories: PropTypes.object.isRequired,
  wallets: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  editWallet: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'account',
  validate,
})(Form);
