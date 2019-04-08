import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FinancesList from './FinancesList';
import WalletStatus from './WalletStatus';

const FinancesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;
const TitleWrapper = styled.div`
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

const ListOfFinances = ({ userAuth, wallet }) => {
  if (!userAuth.uid) return <Redirect to="/signIn" />;
  return (
    <FinancesListWrapper>
      <TitleWrapper>
        <H2>Your finances</H2>
      </TitleWrapper>
      <WalletStatus />
      <FinancesList />
    </FinancesListWrapper>
  );
};

const mapStateToProps = state => ({
  userAuth: state.firebase.auth,
  wallet: state.account.wallet,
});

ListOfFinances.propTypes = {
  userAuth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ListOfFinances);
