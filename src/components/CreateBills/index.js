import React from 'react';
import FormContainer from './FormContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addBillAction} from '../../actions/addBillAction';

class CreateBills extends React.Component {
  handleSubmit = bill => {
    this.props.addBillAction(bill);
  };

  render() {
    return (
      <div>
        <FormContainer handleBill={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bills: state.addBill,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({addBillAction}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateBills);
