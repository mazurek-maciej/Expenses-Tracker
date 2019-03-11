import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavMainWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  position: relative;
  box-shadow: 0 -4px 25px hsla(0, 0%, 90%, 0.1);
  overflow: hidden;
  ::before {
    position: absolute;
    height: 2px;
    width: 80%;
    background: hsl(0, 0%, 30%);
    top: 0;
    border-radius: 50%;
  }
`;
const AddButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
  border: 1px solid hsla(0, 0%, 10%, 1);
  border-radius: 4px;
  background-color: hsla(0, 0%, 25%, 1);
  font-size: 16px;
  a {
    color: #f9f9f9;
  }
`;

const NavigationBar = ({ children }) => {
  return (
    <NavMainWraper>
      <AddButton>
        <Link to="/main">
          <i class="fas fa-home" />
        </Link>
      </AddButton>
      <AddButton>
        <Link to="/add">
          <i class="fas fa-plus" />
        </Link>
      </AddButton>
      {children}
    </NavMainWraper>
  );
};

export default NavigationBar;
