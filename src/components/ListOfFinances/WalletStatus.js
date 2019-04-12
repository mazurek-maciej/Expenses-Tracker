import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchWallets } from '../../actions/accountActions';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const WalletWrapper = styled.div`
  text-align: center;
  background: hsla(187, 65%, 25%, 0.5);
  width: 50%;
  padding: 8px 16px;
  border-radius: 16px;
  margin: 16px;
`;
const WalletStatusText = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.$text};
`;

class WalletStatus extends React.Component {
  componentDidMount() {
    const { firebaseId, fetchWallets } = this.props;
    if (firebaseId) {
      return fetchWallets(firebaseId);
    }
  }

  render() {
    const { wallets } = this.props;
    if (!wallets) return <div>No wallet defined</div>;
    return (
      <Wrapper>
        {wallets.map(wallet => (
          <WalletWrapper key={wallet._id}>
            <WalletStatusText>
              {wallet.name}: {wallet.value}
            </WalletStatusText>
          </WalletWrapper>
        ))}
      </Wrapper>
    );
  }
}

WalletStatus.propTypes = {
  firebaseId: PropTypes.string.isRequired,
  wallets: PropTypes.array,
};

const mapStateToProps = state => ({
  wallets: state.account.wallets,
  firebaseId: state.firebase.auth.uid,
});

export default connect(
  mapStateToProps,
  { fetchWallets }
)(WalletStatus);
