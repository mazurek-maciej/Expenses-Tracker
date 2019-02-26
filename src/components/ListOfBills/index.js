import React from 'react';
import {connect} from 'react-redux';

class Index extends React.Component {
  displayBills() {
    return this.props.bills.map((bill, index) => (
      <div className="content box" key={bill.id}>
        <p className="subtitle">{index}</p>
        <p>Bill description: {bill.decription}</p>
        <p>Amount of money: {bill.amountOfMoney}</p>
        <p>Bill date: {bill.date}</p>
      </div>
    ));
  }

  render() {
    const {bills} = this.props;

    if (bills.length === 0) return <div>Add new bill to your list</div>;

    return <div className="section">{this.displayBills()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    bills: state.addBill,
  };
};

export default connect(mapStateToProps)(Index);
