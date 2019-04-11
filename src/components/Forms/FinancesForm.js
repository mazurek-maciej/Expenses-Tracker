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
const DescriptionWrapper = styled.div`
  display: flex;
  margin: 16px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.$grayBg};
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

  renderWallets = props => {
    const { wallets } = this.props;
    const walletsArray = [];
    if (wallets) {
      const walletsPlaceholder = _.values(wallets);
      walletsPlaceholder.map(wallet =>
        walletsArray.push({
          value: wallet.name,
          label: wallet.name,
          id: wallet._id,
          status: wallet.value,
        })
      );
    }
    return <SelectComponent props={props} options={walletsArray} />;
  };

  renderInputCategory = ({ input, meta, label }) => (
    <InputComponent input={input} meta={meta} label={label} />
  );

  renderDatePicker = props => (
    <DatePickerComponent props={props} presentDate={this.state.presentDate} />
  );

  onSubmit = formValues => {
    const { onSubmit, editWallet, wallets } = this.props;
    console.log(formValues);
    let newWalletValue = '';
    onSubmit(formValues);

    if (formValues.financeType.label === 'Income') {
      newWalletValue = +formValues.wallets.status + +formValues.value;
      editWallet(formValues.wallets.id, {
        name: formValues.wallets.label,
        value: newWalletValue,
      });
    } else {
      newWalletValue = +formValues.wallets.status - +formValues.value;
      editWallet(formValues.wallets.id, {
        name: formValues.wallets.label,
        value: newWalletValue,
      });
    }
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
            name="wallets"
            label="Select wallet"
            component={this.renderWallets}
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
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'account',
  validate,
})(Form);
