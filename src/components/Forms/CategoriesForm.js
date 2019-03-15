import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';

import SelectComponent from './Select';
import InputComponent from './Input';
import { device } from '../../theme/theme';

const FinancesForm = styled.form`
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

class CategoriesForm extends React.Component {
  renderInputField = ({ input, label, meta }) => (
    <InputComponent input={input} meta={meta} label={label} />
  );

  renderSelect = props => {
    const selectedCategory = [];
    if (this.props.categories) {
      console.log(this.props);
    }
    return <SelectComponent props={props} options={selectedCategory} />;
  };

  onSubmit = formValues => {
    this.props.handleSubmit(formValues);
  };

  render() {
    const { handleOnSubmit, handleSubmit } = this.props;
    return (
      <>
        <FinancesForm onSubmit={handleSubmit(handleOnSubmit)}>
          <Field
            name="value"
            label="Create category"
            component={this.renderInputField}
          />
        </FinancesForm>
        <Field
          name="categories"
          label="List of categories"
          component={this.renderSelect}
        />
      </>
    );
  }
}

CategoriesForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'categories',
})(CategoriesForm);
