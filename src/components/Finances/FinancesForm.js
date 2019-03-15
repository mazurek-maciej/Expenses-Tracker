import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import FinancesFormComponent from '../Forms/Form';

import { createFinance } from '../../actions/financeActions';
import 'react-datepicker/dist/react-datepicker.css';

class FinancesForm extends React.Component {
  handleOnSubmit = formValues => {
    this.props.createFinance(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
    return <FinancesFormComponent handleSubmit={this.handleOnSubmit} />;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ createFinance }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(FinancesForm);
