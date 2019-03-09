import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import DatePicker from "react-datepicker";
import Select from "react-select";

import SelectComponent from "../Forms/Select";
import DatePickerComponent from "../Forms/DatePicker";
import InputComponent from "../Forms/Input";

class EditFinanceField extends React.Component {
  state = {
    presentDate: new Date()
  };
  ////
  renderInputField = ({ input, label, meta }) => {
    return <InputComponent input={input} meta={meta} label={label} />;
  };
  ////
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
    return <SelectComponent props={props} options={selectedCategory} />;
  };
  ////
  renderDatePicker = props => {
    return (
      <DatePickerComponent props={props} presentDate={this.state.presentDate} />
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
  };
  ////
  render() {
    const { handleSubmit } = this.props;
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
  if (!formValues.date) {
    errors.date = "Select date!";
  }
  return errors;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

EditFinanceField = connect(
  null,
  mapDispatchToProps
)(EditFinanceField);

export default reduxForm({
  form: "account",
  validate
})(EditFinanceField);
