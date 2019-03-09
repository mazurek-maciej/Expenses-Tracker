import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchFinances } from "../../actions/financeActions";

class FinancesList extends React.Component {
  componentDidMount() {
    this.props.fetchFinances();
  }
  renderFinancesList = () => {
    return this.props.finances.map(finance => (
      <div
        key={finance.id}
        style={{
          display: "flex",
          alignItems: "baseline"
        }}
      >
        <i className="fas fa-dollar-sign" />
        <h1 className="subtitle">{finance.description}</h1>
      </div>
    ));
  };
  render() {
    console.log(this.props);
    if (!this.props.finances) return <div>You have empty list</div>;
    return <>{this.renderFinancesList()}</>;
  }
}

const mapStateToProps = state => {
  return {
    finances: Object.values(state.finances)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchFinances }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinancesList);
