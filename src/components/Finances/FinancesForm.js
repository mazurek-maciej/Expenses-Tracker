import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import {addFinanceAction} from '../../actions/addFinanceAction';
import 'react-datepicker/dist/react-datepicker.css';

class FinancesForm extends React.Component {
  state = {
    presentDate: new Date(),
    financeType: [
      {value: 'Income', label: 'Income'},
      {value: 'Outcome', label: 'Outcome'},
    ],
  };

  renderInputField = ({input, label}) => {
    return (
      <div className="field">
        <label className="label">{label}</label>
        <input {...input} />;
      </div>
    );
  };

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
          options={props.types ? this.state.financeType : selectedCategory}
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
          selected={props.input.value || this.state.presentDate}
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
    let financeType = propsValues.financeTypes.value;
    let category = propsValues.category.value;
    let editable = false;
    let id = Date.now();
    this.props.addFinanceAction({
      ...propsValues,
      date,
      financeType,
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
  return bindActionCreators({addFinanceAction}, dispatch);
};

FinancesForm = connect(
  null,
  mapDispatchToProps,
)(FinancesForm);

export default reduxForm({
  form: 'account',
})(FinancesForm);
