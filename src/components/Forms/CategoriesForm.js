import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import SelectComponent from './Select';
import InputComponent from './Input';
import { device } from '../../theme/theme';

const FinancesForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
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
    return <SelectComponent props={props} options={categoriesArray} />;
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { handleSubmit, categories } = this.props;
    return (
      <>
        <FinancesForm onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
          categories={categories}
        />
      </>
    );
  }
}

CategoriesForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.object.isRequired,
};

export default reduxForm({
  form: 'categories',
})(CategoriesForm);
