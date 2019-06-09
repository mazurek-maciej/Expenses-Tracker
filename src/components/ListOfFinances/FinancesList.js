import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFinances, deleteFinance } from '../../actions/financeActions';

const Table = styled.table`
  width: 100%;
  background: transparent;
`;
const RowContainer = styled.th`
  display: flex;
  justify-content: space-between;
  * {
    color: ${({ theme }) => theme.colors.$text};
  }
`;
const RowLeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid ${({ theme }) => theme.colors.$D3};
`;
const RowRightContainer = styled.div`
  padding: 8px 16px;
  flex: 4;
  display: flex;
  flex-direction: column;
`;
const RightTopContainer = styled.div`
  padding: 4px 0;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
const RightBottomContainer = styled.div`
  padding: 4px 0;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
const P = styled.p`
  font-size: 18px;
`;
const MoneyP = styled(P)`
  color: ${props => (props.color === 'Income' ? '#1dd1a1' : '#ff6b6b')};
`;
const SubP = styled.p`
  font-size: 14px;
`;

const Button = styled.button`
  border: transparent;
  background: transparent;
  padding: 0 8px;
  cursor: pointer;
  margin: 0 8px;
`;

class FinancesList extends React.Component {
  componentDidMount() {
    this.props.fetchFinances(this.props.firebaseId);
  }

  renderFinancesList = (finances, selectedWallet) =>
    finances
      .filter(finance => finance.walletId === selectedWallet)
      .map(finance => (
        <tr key={finance._id}>
          <RowContainer>
            <RowLeftContainer>
              <MoneyP color={finance.financeType.label}>
                $ {finance.value}
              </MoneyP>
            </RowLeftContainer>
            <RowRightContainer>
              <RightTopContainer>
                <P>{finance.description}</P>
                <Link to={`/edit/${finance._id}`}>
                  <i className="fas fa-pen" />
                </Link>
              </RightTopContainer>
              <RightBottomContainer>
                <SubP>{finance.category.label}</SubP>
                <Button
                  onClick={() =>
                    this.props.deleteFinance(this.props.firebaseId, finance._id)
                  }
                  type="button"
                  style={{ fontSize: '16px', margin: '0', padding: '0' }}
                >
                  <i className="fas fa-trash-alt" />
                </Button>
              </RightBottomContainer>
            </RowRightContainer>
          </RowContainer>
        </tr>
      ));

  render() {
    const { finances, selectedWallet } = this.props;
    if (finances.length === 0) return <div>You have empty list</div>;
    console.log(this.props);
    return (
      <>
        <Table className="table">
          <tbody>{this.renderFinancesList(finances, selectedWallet)}</tbody>
        </Table>
      </>
    );
  }
}

const mapStateToProps = state => ({
  finances: Object.values(state.finances),
  firebaseId: state.firebase.auth.uid,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchFinances, deleteFinance }, dispatch);

FinancesList.propTypes = {
  finances: PropTypes.array.isRequired,
  firebaseId: PropTypes.string.isRequired,
  fetchFinances: PropTypes.func.isRequired,
  deleteFinance: PropTypes.func.isRequired,
  selectedWallet: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinancesList);
