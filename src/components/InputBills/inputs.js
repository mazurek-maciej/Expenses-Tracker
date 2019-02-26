import React from 'react';
import styled from 'styled-components';

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
  render() {
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
              <input
                className="input"
                onChange={this.handleInput}
                type="date"
                id="date"
                placeholder="2019-07-22"
                min="2019-01-01"
                max="2019-12-31"
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
