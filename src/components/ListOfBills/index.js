import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import EditBills from '../EditBills';

import {removeBillAction} from '../../actions/removeBillAction';
import {editBillAction} from '../../actions/editBillAction';

class Index extends React.Component {
  displayBills() {
    return this.props.bills.map((bill, index) => {
      if (bill.length !== 0) {
        return (
          <div className="content box" key={bill.id}>
            {console.log(bill)}
            <p className="subtitle">{index}</p>
            <p>Bill description: {bill.description}</p>
            <p>Amount of money: {bill.amountOfMoney}</p>
            <p>Bill date: {bill.date}</p>
            {bill.editable ? (
              <EditBills id={bill.id} date={bill.newDate} />
            ) : null}
            <button onClick={() => this.handleDelete(bill.id)}>
              Remove bill
            </button>
            <button onClick={() => this.handleEdit(bill.id)}>Edit bill</button>
          </div>
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

    return <div className="section">{this.displayBills()}</div>;
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
