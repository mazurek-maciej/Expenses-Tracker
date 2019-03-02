import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputsWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Inputs extends React.Component {
  state = {
    description: '',
    amountOfMoney: null,
    date: '',
    newDate: new Date(),
    id: null,
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleBill(this.state);
  };
  handleInput = e => {
    const date = Date.now();
    this.setState({
      [e.target.id]: e.target.value,
      id: date,
    });
  };
  handleChangeDate = date => {
    this.setState({
      date: date.toLocaleString(),
      newDate: date,
    });
  };
  render() {
    const {description, amountOfMonet, date, id} = this.state;
    return (
      <>
        <h1 className="title" style={{textAlign: 'center'}}>
          Track your bills
        </h1>
        <InputsWraper>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <input
                className="input"
                onChange={this.handleInput}
                type="text"
                placeholder="Description"
                id="description"
              />
            </div>
            <div className="field">
              <input
                className="input"
                onChange={this.handleInput}
                type="text"
                placeholder="Amount of money"
                id="amountOfMoney"
              />
            </div>
            <div className="field">
              <DatePicker
                selected={this.state.newDate}
                onChange={this.handleChangeDate}
                dateFormat="MMMM d, yyyy"
              />
            </div>
            <input className="button" type="submit" value="submit" />
          </form>
        </InputsWraper>
      </>
    );
  }
}
export default Inputs;
