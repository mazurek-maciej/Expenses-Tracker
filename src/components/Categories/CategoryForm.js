import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

import InputComponent from '../Forms/Input';
import { addCategoryAction } from '../../actions/addCategoryAction';

class CategoryForm extends React.Component {
  renderInputCategory = ({ input, meta, label }) => (
    <InputComponent input={input} meta={meta} label={label} />
  );

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            component={this.renderInputCategory}
            name="category"
            label="Enter new category"
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addCategoryAction }, dispatch);

CategoryForm = connect(
  null,
  mapDispatchToProps
)(CategoryForm);

export default reduxForm({
  form: 'categories',
})(CategoryForm);
