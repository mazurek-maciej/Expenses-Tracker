import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import InputComponent from './Input';
import Button from '../Buttons/Button';
import { device } from '../../theme/theme';

const AccountFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  @media ${device.mobileM} {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 0 8px;
  }
`;

class AccountForm extends React.Component {
  renderInputField = ({ input, label, meta }) => (
    <InputComponent input={input} meta={meta} label={label} />
  );

  onSubmit = formValues => {
    const { handleOnCreate } = this.props;
    handleOnCreate(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <AccountFormWrapper onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          name="name"
          label="Provide wallet name"
          component={this.renderInputField}
        />
        <Field
          name="value"
          label="Set wallet initial value"
          component={this.renderInputField}
        />
        <Button type="submit">Submit</Button>
      </AccountFormWrapper>
    );
  }
}

AccountForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleOnCreate: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wallets',
})(AccountForm);
