import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import EditFinanceField from './EditFinanceField';
import {updateBillAction} from '../../actions/updateBillAction';
import {editBillAction} from '../../actions/editBillAction';
import {removeBillAction} from '../../actions/removeBillAction';

import 'react-datepicker/dist/react-datepicker.css';

class EditFinance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      newDate: '',
      category: '',
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
      this.state.category.value,
    );
  };
  handleChangeDate = date => {
    let month = date.getUTCMonth() + 1;
    let year = date.getFullYear();
    let day = date.getUTCDate();
    let newDate = `${day}/${month}/${year}`;
    this.setState({
      date: date,
      newDate: newDate,
    });
  };
  handleCategories = category => {
    this.setState({category});
  };
  handleDeleteEditable = id => {
    console.log(id);
    this.props.removeBillAction(id);
  };
  handleEditEditable = id => {
    this.props.editBillAction(id);
  };

  render() {
    const {finances, categories, id} = this.props;
    const {date} = this.state;
    return (
      <EditFinanceField
        id={id}
        prevFinance={finances}
        categories={categories}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    finances: state.finances,
    categories: state.categories,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {updateBillAction, editBillAction, removeBillAction},
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditFinance);
