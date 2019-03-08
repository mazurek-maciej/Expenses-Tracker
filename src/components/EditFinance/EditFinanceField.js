import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import {updateBillAction} from '../../actions/updateBillAction';

class EditFinanceField extends React.Component {
  state = {
    presentDate: new Date(),
  };
  ////
  renderInputField = ({input, label}) => {
    return (
      <div className="field">
        <label className="label">{label}</label>
        <input {...input} />
      </div>
    );
  };
  ////
  renderSelect = props => {
    const selectedCategory = [];
    if (this.props.categories) {
      this.props.categories.map(category =>
        selectedCategory.push({
          value: category.category,
          label: category.category,
        }),
      );
    }
    return (
      <div className="field">
        <label className="label">{props.label}</label>
        <Select
          options={selectedCategory}
          value={props.input.value}
          onChange={props.input.onChange}
          {...props}
        />
      </div>
    );
  };
  ////
  renderDatePicker = props => {
    return (
      <div className="field">
        <label className="label">{props.label}</label>
        <DatePicker
          selected={props.input.value || this.state.presentDate}
          onChange={props.input.onChange}
          dateFormat="MMMM d, yyyy"
          {...props}
        />
      </div>
    );
  };
  ////
  handleSubmitForm = propsValues => {
    let month = propsValues.date.getUTCMonth() + 1;
    let year = propsValues.date.getFullYear();
    let day = propsValues.date.getUTCDate();
    let date = `${day}/${month}/${year}` || this.props.preVinance[0].date;
    let category = propsValues.category.value;
    let id = this.props.id;
    this.props.updateBillAction({
      ...propsValues,
      date,
      category,
      id,
    });
  };
  ////
  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleSubmitForm)}>
          <Field
            name="description"
            label="Enter new description"
            component={this.renderInputField}
          />
          <Field
            name="money"
            label="Enter new amount of money"
            component={this.renderInputField}
          />
          <Field
            name="date"
            label="Select new date"
            component={this.renderDatePicker}
          />
          <Field
            name="category"
            label="Select new category"
            component={this.renderSelect}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({updateBillAction}, dispatch);
};

EditFinanceField = connect(
  null,
  mapDispatchToProps,
)(EditFinanceField);

export default reduxForm({
  form: 'account',
})(EditFinanceField);
