import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchWallet, editWallet } from '../../actions/accountActions';

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

class WalletStatus extends React.Component {
  componentDidMount() {
    const { firebaseId, fetchWallet } = this.props;
    if (firebaseId) {
      return fetchWallet(firebaseId);
    }
  }

  render() {
    const { wallet } = this.props;
    if (!wallet) return <div>No wallet defined</div>;
    return (
      <Wrapper>
        <WalletWrapper>
          <WalletStatusText>{wallet}</WalletStatusText>
        </WalletWrapper>
      </Wrapper>
    );
  }
}

WalletStatus.propTypes = {
  firebaseId: PropTypes.string.isRequired,
  wallet: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  wallet: state.account.wallet,
  firebaseId: state.firebase.auth.uid,
});

export default connect(
  mapStateToProps,
  { fetchWallet }
)(WalletStatus);
