import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import FinancesFormComponent from '../Forms/FinancesForm';

import { createFinance } from '../../actions/financeActions';
import { editWallet } from '../../actions/accountActions';
import 'react-datepicker/dist/react-datepicker.css';

class FinancesForm extends React.Component {
  handleOnSubmit = formValues => {
    const { firebaseId, createFinance } = this.props;
    createFinance(formValues, firebaseId);
  };

  render() {
    const { categories, firebaseId, wallets, editWallet } = this.props;
    return (
      <FinancesFormComponent
        onSubmit={this.handleOnSubmit}
        categories={categories}
        wallets={wallets}
        editWallet={editWallet}
        firebaseId={firebaseId}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createFinance, editWallet }, dispatch);

const mapStateToProps = state => ({
  firebaseId: state.firebase.auth.uid,
});

FinancesForm.propTypes = {
  categories: PropTypes.object.isRequired,
  firebaseId: PropTypes.string.isRequired,
  wallets: PropTypes.array,
  editWallet: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinancesForm);
