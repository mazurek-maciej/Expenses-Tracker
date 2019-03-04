import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DatePicker from 'react-datepicker';

import EditComponent from './EditComponent';
import {updateBillAction} from '../../actions/updateBillAction';

import 'react-datepicker/dist/react-datepicker.css';

class EditBills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      newDate: '',
    };
    this.getDesc = React.createRef();
    this.getMoney = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    const newDescription = this.getDesc.current.value;
    const newAmountOfMoney = this.getMoney.current.value;
    const newDate = this.state.newDate;
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
    const {date} = this.state;
    return (
      <EditComponent
        handleSubmit={this.handleSubmit}
        handleChangeDate={this.handleChangeDate}
        getDesc={this.getDesc}
        getMoney={this.getMoney}
        bills={bills}
        date={date}
      />
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
