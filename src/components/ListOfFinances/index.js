import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FinancesList from './FinancesList';

const FinancesListWraper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

const ListOfFinances = props => {
  if (!props.userAuth.uid) return <Redirect to="/signIn" />;
  return (
    <FinancesListWraper>
      <h1>Your finances</h1>
      <FinancesList />
    </FinancesListWraper>
  );
};

const mapStateToProps = state => ({
  userAuth: state.firebase.auth,
});

export default connect(mapStateToProps)(ListOfFinances);
