import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeBillAction} from '../../actions/removeBillAction';

class Index extends React.Component {
  displayBills() {
    return this.props.bills.map((bill, index) => {
      if (bill.length !== 0) {
        return (
          <div className="content box" key={bill.id}>
            <p className="subtitle">{index}</p>
            <p>Bill description: {bill.description}</p>
            <p>Amount of money: {bill.amountOfMoney}</p>
            <p>Bill date: {bill.date}</p>
            <button onClick={() => this.handleDelete(bill.id)}>
              Remove bill
            </button>
          </div>
        );
      }
    });
  }

  handleDelete = id => {
    this.props.removeBillAction(id);
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
  return bindActionCreators({removeBillAction}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
