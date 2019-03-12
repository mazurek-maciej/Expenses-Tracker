import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavMainWraper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  position: relative;
  box-shadow: 0 -2px 25px hsla(0, 0%, 90%, 0.1);
  overflow: hidden;
  ::before {
    /* content: ""; */
    position: absolute;
    height: 2px;
    width: 80%;
    background: hsl(0, 0%, 30%);
    top: 0;
    border-radius: 50%;
  }
`;
const StyledButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
  border: 1px solid hsla(0, 0%, 10%, 1);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.$D5};
  font-size: 16px;
  a {
    color: #f9f9f9;
  }
`;

const NavigationBar = ({ children }) => {
  return (
    <NavMainWraper>
      <StyledButton>
        <Link to="/main">
          <i className="fas fa-home" />
        </Link>
      </StyledButton>
      <StyledButton>
        <Link to="/add">
          <i className="fas fa-plus" />
        </Link>
      </StyledButton>
      {children}
    </NavMainWraper>
  );
};

export default NavigationBar;
