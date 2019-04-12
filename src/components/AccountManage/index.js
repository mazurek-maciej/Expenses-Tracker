import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createWallet } from '../../actions/accountActions';
import AccountForm from '../Forms/AccountForm';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;
const AccountWrapper = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
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

function AccountManage({ firebaseId, createWallet }) {
  function handleSubmit(formValues) {
    createWallet(firebaseId, formValues);
  }

  if (!firebaseId) return <Redirect to="/signIn" />;

  return (
    <Wrapper>
      <TitleWrapper>
        <H2>Create new wallet</H2>
      </TitleWrapper>
      <AccountWrapper>
        <AccountForm handleOnCreate={handleSubmit} firebaseId={firebaseId} />
      </AccountWrapper>
    </Wrapper>
  );
}

AccountManage.propTypes = {
  firebaseId: PropTypes.string.isRequired,
  createWallet: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  firebaseId: state.firebase.auth.uid,
});

export default connect(
  mapStateToProps,
  { createWallet }
)(AccountManage);
