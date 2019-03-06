import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
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
    console.log(propsValues);
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

export default reduxForm({
  form: 'account',
})(AddForm);
