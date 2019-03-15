import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFinances } from '../../actions/financeActions';

class FinancesList extends React.Component {
  componentDidMount() {
    this.props.fetchFinances();
  }

  renderEditButton(finance) {
    if (finance.userId === this.props.currentUserId) {
      return (
        <button className="button is-dark">
          <i className="fas fa-pen" />
        </button>
      );
    }
  }

  renderFinanceTile() {}

  renderFinancesList = () =>
    this.props.finances.map(finance => (
      <tr key={finance.id}>
        <th>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <i className="fas fa-dollar-sign" />
            <p className="subtitle">{finance.description}</p>
            {this.renderEditButton(finance)}
          </div>
        </th>
      </tr>
    ));

  render() {
    if (this.props.finances.length === 0) return <div>You have empty list</div>;
    return (
      <>
        <table
          className="table"
          style={{ backgroundColor: '#1A1A1A', marginTop: '16px' }}
        >
          <tbody>{this.renderFinancesList()}</tbody>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinancesList);
