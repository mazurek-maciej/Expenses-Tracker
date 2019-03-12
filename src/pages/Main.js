import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import FinancesList from "../components/ListOfFinances/FinancesList";

const MainWraper = styled.div`
  background-color: #1a1a1a;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
  max-width: 900px;
  width: 100%;
`;
const TitleWraper = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;
const PageTitle = styled.h1`
  font-size: 32px;
  margin-left: 32px;
  color: #f9f9f9;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    height: 1px;
    background-color: #f9f9f9;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;
const ListWraper = styled.div`
  flex: 3;
  display: flex;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-start;
`;
const BottomWraper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const AddButton = styled.button`
  padding: 8px 24px;
  border: 1px solid hsla(0, 0%, 10%, 1);
  border-radius: 4px;
  background-color: hsla(0, 0%, 25%, 1);
  font-size: 16px;
  a {
    color: #f9f9f9;
  }
`;

const MainPage = props => {
  return (
    <MainWraper>
      <TitleWraper>
        <PageTitle>Your account</PageTitle>
      </TitleWraper>
      <ListWraper>
        <FinancesList />
      </ListWraper>
    </MainWraper>
  );
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(MainPage);
