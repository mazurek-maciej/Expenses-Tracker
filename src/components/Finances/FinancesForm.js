import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import FinancesFormComponent from '../Forms/FinancesForm';

import { createFinance } from '../../actions/financeActions';
import 'react-datepicker/dist/react-datepicker.css';

class FinancesForm extends React.Component {
  handleOnSubmit = formValues => {
    this.props.createFinance(formValues);
  };

  render() {
    const { categories } = this.props;
    return (
      <FinancesFormComponent
        handleSubmit={this.handleOnSubmit}
        categories={categories}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createFinance }, dispatch);

FinancesForm.propTypes = {
  categories: PropTypes.object,
};

export default connect(
  null,
  mapDispatchToProps
)(FinancesForm);
