import React from "react";
import FinancesForm from "./FinancesForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

const AddFormWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
`;

class Finances extends React.Component {
  render() {
    return (
      <AddFormWraper>
        <FinancesForm categories={this.props.categories} />
      </AddFormWraper>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Finances);
