import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';
import * as ROUTES from '../../constants/routes';

const NavMainWraper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  position: relative;
  box-shadow: 0 -2px 25px hsla(0, 0%, 90%, 0.1);
  overflow: hidden;
  z-index: 3;
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
const StyledButton = styled.li`
  list-style: none;
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

const NavigationBar = props => props.userAuth.uid ? (
    <NavMainWraper>
      <>
        <StyledButton>
          <Link to="/">
            <i className="fas fa-home" />
          </Link>
        </StyledButton>
        <StyledButton>
          <Link to="/newFinance">
            <i className="fas fa-plus" />
          </Link>
        </StyledButton>
        <StyledButton onClick={props.signOut}>
          <Link to="/signIn">SignOut</Link>
        </StyledButton>
      </>
    </NavMainWraper>
  ) : (
    <NavMainWraper>
      <>
        <StyledButton>
          <Link to="signIn">SignIn</Link>
        </StyledButton>
        <StyledButton>
          <Link to="/signUp">SignUp</Link>
        </StyledButton>
      </>
    </NavMainWraper>
  );

const mapStateToProps = state => ({
  userAuth: state.firebase.auth,
});

export default connect(
  mapStateToProps,
  { signOut }
)(NavigationBar);
