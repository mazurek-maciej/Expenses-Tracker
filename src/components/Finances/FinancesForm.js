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
    const { userId } = this.props;
    this.props.createFinance(formValues, userId);
  };

  render() {
    const { categories, userId } = this.props;
    return (
      <FinancesFormComponent
        onSubmit={this.handleOnSubmit}
        categories={categories}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createFinance }, dispatch);

const mapStateToProps = state => ({
  userId: state.firebase.auth.uid,
});

FinancesForm.propTypes = {
  categories: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinancesForm);
