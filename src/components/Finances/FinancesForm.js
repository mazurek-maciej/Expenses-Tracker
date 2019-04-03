import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import FinancesFormComponent from '../Forms/FinancesForm';

import { createFinance } from '../../actions/financeActions';
import { editWallet } from '../../actions/accountActions';
import 'react-datepicker/dist/react-datepicker.css';

// TODO: Przydałoby się pobrać aktualny stan konta od niego odjąć
// Następnie przesłać zaktualizować z nową wartością.

class FinancesForm extends React.Component {
  handleOnSubmit = formValues => {
    console.log(formValues);
    const { userId } = this.props;
    this.props.createFinance(formValues, userId);
  };

  render() {
    const { categories, userId, walletStatus } = this.props;
    console.log(walletStatus);
    return (
      <FinancesFormComponent
        onSubmit={this.handleOnSubmit}
        categories={categories}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createFinance, editWallet }, dispatch);

const mapStateToProps = state => ({
  userId: state.firebase.auth.uid,
  walletStatus: Object.values(state.account),
});

FinancesForm.propTypes = {
  categories: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinancesForm);
