import React from 'react';
import Inputs from './inputs';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addBillAction} from '../../actions/addBillAction';

class Index extends React.Component {
  handleSubmit = bill => {
    this.props.addBillAction(bill);
  };

  render() {
    return (
      <div>
        <Inputs handleBill={this.handleSubmit} />
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
)(Index);
