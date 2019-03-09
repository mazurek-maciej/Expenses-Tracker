import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import FinanceTile from "./FinanceTile";

class Index extends React.Component {
  render() {
    if (finances.length === 0) return <div>Add new bill to your list</div>;
    return (
      <>
        <div>list of finances</div>
      </>
    );
  }
}

const mapStateToProps = state => {};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
