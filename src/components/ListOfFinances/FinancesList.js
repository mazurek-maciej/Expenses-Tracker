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
const RowContainer = styled.div`
  padding: 8px;
  display: flex;
  align-items: baseline;
  * {
    color: ${({ theme }) => theme.colors.$text};
  }
`;
const P = styled.p`
  align-self: flex-start;
  font-size: ${({ theme }) => theme.size.$h5};
  margin-left: 1rem;
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
    this.props.fetchFinances();
  }

  renderFinancesList = finances =>
    finances.map(finance => (
      <tr key={finance._id}>
        <th>
          <RowContainer>
            <i className="fas fa-dollar-sign" />
            <P className="subtitle">{finance.value}</P>
            <P className="subtitle">{finance.description}</P>
            <div style={{ marginLeft: 'auto' }}>
              <Button
                onClick={() =>
                  this.props.deleteFinance(this.props.firebaseId, finance._id)
                }
                type="button"
              >
                <i className="fas fa-trash-alt" />
              </Button>
              <Link to={`/edit/${finance.id}`}>
                <i className="fas fa-pen" />
              </Link>
            </div>
          </RowContainer>
        </th>
      </tr>
    ));

  render() {
    const { finances } = this.props;
    if (finances.length === 0) return <div>You have empty list</div>;
    return (
      <>
        <Table className="table">
          <tbody>{this.renderFinancesList(finances)}</tbody>
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinancesList);
