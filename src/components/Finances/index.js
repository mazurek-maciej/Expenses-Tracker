import React from 'react';
import FinancesForm from './FinancesForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';

import {addFinanceAction} from '../../actions/addFinanceAction';

const AddFormWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
`;

class Finances extends React.Component {
  handleSubmit = finance => {
    this.props.addFinanceAction(finance);
  };

  render() {
    return (
      <AddFormWraper>
        <FinancesForm categories={this.props.categories} />
      </AddFormWraper>
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
  return bindActionCreators({addFinanceAction}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Finances);
