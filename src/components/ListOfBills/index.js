import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import BillTile from './BillTile';

import {removeBillAction} from '../../actions/removeBillAction';
import {editBillAction} from '../../actions/editBillAction';

class Index extends React.Component {
  displayBills() {
    return this.props.bills.map((bill, index) => {
      if (bill.length !== 0) {
        return (
          <BillTile
            id={bill.id}
            description={bill.description}
            amountOfMoney={bill.amountOfMoney}
            date={bill.date}
            newDate={bill.newDate}
            editable={bill.editable}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        );
      }
    });
  }

  handleDelete = id => {
    this.props.removeBillAction(id);
  };
  handleEdit = id => {
    this.props.editBillAction(id);
  };

  render() {
    const {bills} = this.props;
    if (bills.length === 0) return <div>Add new bill to your list</div>;
    return <>{this.displayBills()}</>;
  }
}

const mapStateToProps = state => {
  return {
    bills: state.bills,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({removeBillAction, editBillAction}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
