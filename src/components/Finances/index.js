import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import FinancesForm from './FinancesForm';

const AddFormWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
`;

class Finances extends React.Component {
  render() {
    if (!this.props.userAuth.uid) return <Redirect to="/signIn" />;
    return (
      <AddFormWraper>
        <FinancesForm categories={this.props.categories} />
      </AddFormWraper>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  userAuth: state.firebase.auth,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Finances);
