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
  padding: 16px 8px;
`;
const WalletWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${props =>
    props.highlight ? 'hsla(187, 65%, 40%, 0.5)' : 'hsla(187, 65%, 25%, 0.5)'};
  width: 100%;
  margin: 16px 0;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.$text};
  border-radius: 4px;
`;
const WalletStatusText = styled.h2`
  font-size: 1.8rem;
`;

class WalletStatus extends React.Component {
  componentDidMount() {
    const { firebaseId, fetchWallets } = this.props;
    if (firebaseId) {
      return fetchWallets(firebaseId);
    }
  }

  checkFinances = (id, financesArray) => {
    const incomesArray = [];
    const outcomesArray = [];
    if (financesArray) {
      financesArray
        .filter(item => item.walletId === id)
        .map(item => {
          if (item.financeType.label === 'Income') {
            return incomesArray.push(item.value);
          }
          if (item.financeType.label === 'Outcome') {
            return outcomesArray.push(item.value);
          }
        });
    }
    return (
      <div>
        <div>
          Incomes $
          {incomesArray.length !== 0
            ? incomesArray.reduce((acc, a) => +acc + +a)
            : 0}
        </div>
        <div>
          Outcomes $
          {outcomesArray.length !== 0
            ? outcomesArray.reduce((acc, a) => +acc + +a)
            : 0}
        </div>
      </div>
    );
  };

  render() {
    const { wallets, finances, setWallet, selectedWallet } = this.props;
    if (!wallets) return <div>No wallet defined</div>;
    return (
      <Wrapper>
        {wallets.map(wallet => (
          <WalletWrapper
            highlight={wallet._id === selectedWallet}
            onClick={() => setWallet(wallet._id)}
            key={wallet._id}
          >
            <div>
              <div>{wallet.name}</div>
              <WalletStatusText>$ {wallet.value}</WalletStatusText>
            </div>
            <div>{this.checkFinances(wallet._id, finances)}</div>
          </WalletWrapper>
        ))}
      </Wrapper>
    );
  }
}

WalletStatus.propTypes = {
  firebaseId: PropTypes.string.isRequired,
  selectedWallet: PropTypes.string.isRequired,
  wallets: PropTypes.array,
  finances: PropTypes.array,
  setWallet: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  wallets: state.account.wallets,
  firebaseId: state.firebase.auth.uid,
  finances: Object.values(state.finances),
});

export default connect(
  mapStateToProps,
  { fetchWallets }
)(WalletStatus);
