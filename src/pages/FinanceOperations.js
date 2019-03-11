import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import Finances from "../components/Finances";

const AddBillsWraper = styled.div`
  background-color: #1a1a1a;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
  max-width: 900px;
  width: 100%;
`;
const PageTitle = styled.h1`
  font-size: 32px;
  margin-left: 32px;
  margin-bottom: 24px;
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
const TopWraper = styled.div`
  flex: 2;
`;
const MainWraper = styled.div`
  flex: 2;
`;
const BottomWraper = styled.div`
  flex: 1;
`;

const AddBillsPage = () => {
  return (
    <AddBillsWraper>
      <TopWraper>
        <div style={{ display: "flex" }}>
          <PageTitle>Add expense or income</PageTitle>
        </div>
        <Finances />
      </TopWraper>
      <MainWraper>
        <div style={{ display: "flex" }}>
          <PageTitle>Add new category</PageTitle>
        </div>
        <Categories />
      </MainWraper>
    </AddBillsWraper>
  );
};
export default AddBillsPage;
