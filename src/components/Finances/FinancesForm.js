import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import DatePicker from "react-datepicker";
import Select from "react-select";

import SelectComponent from "../Forms/Select";
import DatePickerComponent from "../Forms/DatePicker";
import InputComponent from "../Forms/Input";

import { addFinanceAction } from "../../actions/addFinanceAction";
import "react-datepicker/dist/react-datepicker.css";

class FinancesForm extends React.Component {
  state = {
    presentDate: new Date(),
    financeType: [
      { value: "Income", label: "Income" },
      { value: "Outcome", label: "Outcome" }
    ]
  };
  renderInputField = ({ input, label, meta }) => {
    return <InputComponent input={input} meta={meta} label={label} />;
  };

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
    return (
      <SelectComponent
        props={props}
        options={props.types ? this.state.financeType : selectedCategory}
      />
    );
  };

  renderDatePicker = props => {
    console.log(props);
    return (
      <DatePickerComponent props={props} presentDate={this.state.presentDate} />
    );
  };

  handleSubmitForm = formValues => {
    let month = formValues.date.getUTCMonth() + 1;
    let year = formValues.date.getFullYear();
    let day = formValues.date.getUTCDate();
    let date = `${day}/${month}/${year}`;
    let financeType = formValues.financeTypes.value;
    let category = formValues.category.value;
    let editable = false;
    let id = Date.now();
    this.props.addFinanceAction({
      ...formValues,
      date,
      financeType,
      category,
      editable,
      id
    });
  };
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.handleSubmitForm)}>
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
            validateOn="change"
            validators={{
              required: val => val && val.length
            }}
            mapProps={{
              value: props => props.modelValue,
              onChange: props => props.onChange
            }}
          />
          <Field
            name="date"
            label="Select date"
            component={this.renderDatePicker}
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
  if (!formValues.financeTypes) {
    errors.financeTypes = "Select type!";
  }
  if (!formValues.date) {
    errors.date = "Select date!";
  }
  return errors;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addFinanceAction }, dispatch);
};

FinancesForm = connect(
  null,
  mapDispatchToProps
)(FinancesForm);

export default reduxForm({
  form: "account",
  validate
})(FinancesForm);
