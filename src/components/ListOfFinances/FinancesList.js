import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFinances } from '../../actions/financeActions';

class FinancesList extends React.Component {
  componentDidMount() {
    this.props.fetchFinances();
  }

  renderFinancesList = finances =>
    finances.map(finance => (
      <tr key={finance.id}>
        <th>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <i className="fas fa-dollar-sign" />
            <p className="subtitle">{finance.description}</p>
            <Link to="/edit">Edit</Link>
          </div>
        </th>
      </tr>
    ));

  render() {
    const { finances } = this.props;
    if (finances.length === 0) return <div>You have empty list</div>;
    return (
      <>
        <table
          className="table"
          style={{ backgroundColor: '#1A1A1A', marginTop: '16px' }}
        >
          <tbody>{this.renderFinancesList(finances)}</tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = state => ({
  finances: Object.values(state.finances),
  currentUserId: state.auth.userId,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchFinances }, dispatch);

FinancesList.propTypes = {
  finances: PropTypes.array.isRequired,
  fetchFinances: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinancesList);
