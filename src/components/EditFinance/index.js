import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import EditFinanceField from "./EditFinanceField";

import "react-datepicker/dist/react-datepicker.css";

class EditFinance extends React.Component {
  render() {
    const { categories } = this.props;
    const { date } = this.state;
    return <EditFinanceField categories={categories} />;
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFinance);
