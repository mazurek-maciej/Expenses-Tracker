import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FinancesList from './FinancesList';

const FinancesListWraper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const TitleWraper = styled.div`
  align-self: flex-start;
  position: relative;
  margin: 32px 0 16px 16px;
`;
const H2 = styled.h2`
  font-size: ${({ theme }) => theme.size.$h2};
  color: ${({ theme }) => theme.colors.$D13};
  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.$D13};
    bottom: 0;
    left: 0;
  }
`;

const ListOfFinances = ({ userAuth }) => {
  if (!userAuth.uid) return <Redirect to="/signIn" />;
  return (
    <FinancesListWraper>
      <TitleWraper>
        <H2>Your finances</H2>
      </TitleWraper>
      <FinancesList />
    </FinancesListWraper>
  );
};

const mapStateToProps = state => ({
  userAuth: state.firebase.auth,
});

ListOfFinances.propTypes = {
  userAuth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ListOfFinances);
