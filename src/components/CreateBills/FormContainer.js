import React from 'react';
import CreateBillForm from './CreateBillForm';

class FormContainer extends React.Component {
  state = {
    description: '',
    amountOfMoney: '',
    date: '',
    newDate: new Date(),
    id: null,
    editable: false,
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleBill(this.state);
    this.setState({description: '', amountOfMoney: ''});
  };
  handleInput = e => {
    const date = Date.now();
    this.setState({
      [e.target.id]: e.target.value,
      id: date,
    });
  };
  handleChangeDate = date => {
    let month = date.getUTCMonth() + 1;
    let year = date.getFullYear();
    let day = date.getUTCDate();
    let newDate = `${day}/${month}/${year}`;
    this.setState({
      date: newDate,
      newDate: date,
    });
  };
  render() {
    const {description, amountOfMoney, newDate} = this.state;
    return (
      <>
        <CreateBillForm
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          handleChangeDate={this.handleChangeDate}
          amountOfMoney={amountOfMoney}
          description={description}
          newDate={newDate}
        />
      </>
    );
  }
}
export default FormContainer;
