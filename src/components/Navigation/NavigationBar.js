import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';
import * as ROUTES from '../../constants/routes';

const NavMainWrapper = styled.div`
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
  padding: 16px;
  margin: 0 4px;
  border: 2px solid ${({ theme }) => theme.colors.$primary};
  border-radius: 50%;
  background-color: transparent;
  font-size: 16px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f9f9f9;
    width: 20px;
    height: 18px;
  }
`;

const NavigationBar = ({ userAuth, signOut }) =>
  userAuth.uid ? (
    <NavMainWrapper>
      <>
        <StyledButton>
          <Link to="/">
            <i className="fas fa-home" />
          </Link>
        </StyledButton>
        <StyledButton>
          <Link to="/new-finance">
            <i className="fas fa-plus" />
          </Link>
        </StyledButton>
        <StyledButton onClick={signOut}>
          <Link to="/signIn">
            <i class="fas fa-sign-out-alt" />
          </Link>
        </StyledButton>
      </>
    </NavMainWrapper>
  ) : (
    <NavMainWrapper>
      <>
        <StyledButton>
          <Link to="/signUp">
            <i className="fas fa-user-plus" />
          </Link>
        </StyledButton>
      </>
    </NavMainWrapper>
  );

const mapStateToProps = state => ({
  userAuth: state.firebase.auth,
});

NavigationBar.propTypes = {
  userAuth: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { signOut }
)(NavigationBar);
