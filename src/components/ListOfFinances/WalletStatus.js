import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchWallet } from '../../actions/accountActions';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WalletWrapper = styled.div`
  text-align: center;
  background: hsla(187, 65%, 25%, 0.5);
  width: 50%;
  padding: 8px 16px;
  border-radius: 16px;
`;
const WalletStatusText = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.$text};
`;

const WalletStatus = ({ userId, fetchWallet, wallet }) => {
  useEffect(() => {
    if (userId) {
      fetchWallet(userId);
    }
  }, [fetchWallet, userId]);

  return (
    <React.Fragment>
      {wallet
        ? wallet.map(el => (
            <Wrapper key={el.id}>
              <WalletWrapper>
                <WalletStatusText>Balance: {el.amount}$</WalletStatusText>
              </WalletWrapper>
            </Wrapper>
          ))
        : null}
    </React.Fragment>
  );
};

WalletStatus.propTypes = {
  userId: PropTypes.string.isRequired,
  fetchWallet: PropTypes.func.isRequired,
  wallet: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  userId: state.firebase.auth.uid,
  wallet: Object.values(state.account),
});

export default connect(
  mapStateToProps,
  { fetchWallet }
)(WalletStatus);
