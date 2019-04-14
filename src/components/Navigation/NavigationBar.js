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
const CenteringWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledButton = styled.li`
  list-style: none;
  padding: 16px;
  margin: 0 4px;
  border: 2px solid ${({ theme }) => theme.colors.$primary};
  border-radius: 50%;
  background-color: transparent;
  font-size: 16px;
  position: relative;
  ::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    box-shadow: 0 0 15px 2px ${({ theme }) => theme.colors.$primary};
    opacity: 0;
    z-index: -1;
    transition: opacity 0.2s;
  }
  :hover::after,
  :active::after {
    opacity: 1;
  }
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
      <CenteringWrapper>
        <StyledButton>
          <Link to="/">
            <i className="fas fa-home" />
          </Link>
        </StyledButton>
        <StyledButton>
          <Link to="/add">
            <i className="fas fa-plus" />
          </Link>
        </StyledButton>
        <StyledButton onClick={signOut}>
          <Link to="/signIn">
            <i className="fas fa-sign-out-alt" />
          </Link>
        </StyledButton>
      </CenteringWrapper>
    </NavMainWrapper>
  ) : (
    <NavMainWrapper>
      <CenteringWrapper>
        <StyledButton>
          <Link to="/signUp">
            <i className="fas fa-user-plus" />
          </Link>
        </StyledButton>
      </CenteringWrapper>
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
