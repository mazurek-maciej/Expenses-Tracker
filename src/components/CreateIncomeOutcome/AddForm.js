import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import {addBillAction} from '../../actions/addBillAction';
import 'react-datepicker/dist/react-datepicker.css';

class AddForm extends React.Component {
  state = {
    currentDate: new Date(),
    incomeTypes: [
      {value: 'Income', label: 'Income'},
      {value: 'Outcome', label: 'Outcome'},
    ],
  };

  renderInput = ({input, label}) => {
    return (
      <div className="field">
        <label className="label">{label}</label>
        <input {...input} />;
      </div>
    );
  };

  renderSelect = props => {
    const categoriesSelect = [];
    if (this.props.categoriesList) {
      this.props.categoriesList.map(cat =>
        categoriesSelect.push({value: cat.category, label: cat.category}),
      );
    }
    return (
      <div className="field">
        <label className="label">{props.label}</label>
        <Select
          options={props.types ? this.state.incomeTypes : categoriesSelect}
          value={props.input.value}
          onChange={props.input.onChange}
          {...props}
        />
      </div>
    );
  };

  renderDatePicker = props => {
    return (
      <div className="field">
        <label className="label">{props.label}</label>
        <DatePicker
          selected={props.input.value || this.state.currentDate}
          onChange={props.input.onChange}
          dateFormat="MMMM d, yyyy"
          {...props}
        />
      </div>
    );
  };

  handleSubmitForm = propsValues => {
    let month = propsValues.date.getUTCMonth() + 1;
    let year = propsValues.date.getFullYear();
    let day = propsValues.date.getUTCDate();
    let date = `${day}/${month}/${year}`;
    let incomeType = propsValues.typeOfAccount.value;
    let category = propsValues.category.value;
    let editable = false;
    let id = Date.now();
    this.props.addBillAction({
      ...propsValues,
      date,
      incomeType,
      category,
      editable,
      id,
    });
  };
  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleSubmitForm)}>
          <Field
            name="description"
            component={this.renderInput}
            label="Enter description"
          />
          <Field
            name="amountOfMoney"
            component={this.renderInput}
            label="Enter value"
          />
          <Field
            name="typeOfAccount"
            label="Select type"
            types
            component={this.renderSelect}
          />
          <Field
            name="category"
            label="Select category"
            component={this.renderSelect}
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({addBillAction}, dispatch);
};

AddForm = connect(
  null,
  mapDispatchToProps,
)(AddForm);
export default reduxForm({
  form: 'account',
})(AddForm);
