import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import FinancesFormComponent from '../Forms/FinancesForm';

import { createFinance } from '../../actions/financeActions';
import { fetchWallet, editWallet } from '../../actions/accountActions';
import 'react-datepicker/dist/react-datepicker.css';

class FinancesForm extends React.Component {
  componentDidMount() {
    const { firebaseId, fetchWallet } = this.props;
    if (firebaseId) {
      fetchWallet(firebaseId);
    }
  }

  handleOnSubmit = formValues => {
    const { firebaseId, createFinance } = this.props;
    createFinance(formValues, firebaseId);
  };

  render() {
    const { categories, firebaseId, wallet, editWallet } = this.props;
    return (
      <FinancesFormComponent
        onSubmit={this.handleOnSubmit}
        categories={categories}
        wallet={wallet}
        editWallet={editWallet}
        firebaseId={firebaseId}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createFinance, fetchWallet, editWallet }, dispatch);

const mapStateToProps = state => ({
  firebaseId: state.firebase.auth.uid,
  walletStatus: Object.values(state.account),
  wallet: state.account.wallet,
});

FinancesForm.propTypes = {
  categories: PropTypes.object.isRequired,
  firebaseId: PropTypes.string.isRequired,
  wallet: PropTypes.string,
  fetchWallet: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinancesForm);
