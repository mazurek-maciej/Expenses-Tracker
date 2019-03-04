import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DatePicker from 'react-datepicker';
import {updateBillAction} from '../../actions/updateBillAction';
import 'react-datepicker/dist/react-datepicker.css';

class EditBills extends React.Component {
  state = {
    date: new Date(),
    newDate: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const newDescription = this.getDesc.value;
    const newDate = this.state.newDate;
    console.log(newDate);
    const newAmountOfMoney = this.getMoney.value;
    this.props.updateBillAction(
      this.props.id,
      newDescription,
      newDate,
      newAmountOfMoney,
    );
  };
  handleChangeDate = date => {
    this.setState({
      date: date,
      newDate: date.toLocaleString(),
    });
  };

  render() {
    const {bills} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          defaultValue={bills.description}
          type="text"
          placeholder="Enter new description"
          ref={input => (this.getDesc = input)}
        />
        <input
          defaultValue={bills.amountOfMoney}
          type="text"
          placeholder="Enter new amount of money"
          ref={input => (this.getMoney = input)}
        />
        <DatePicker
          selected={this.state.date}
          onChange={this.handleChangeDate}
          dateFormat="MMMM d, yyyy"
        />
        <input type="submit" placeholder="Update bill" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    bills: state.bills,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({updateBillAction}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditBills);
