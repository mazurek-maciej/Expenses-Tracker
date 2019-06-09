import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signUp } from '../../actions/authActions';

import Button from '../Buttons/Button';
import AuthForm from '../Forms/AuthForm';
import FormField from '../Forms/AuthFormField';

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;
const Error = styled.p`
  color: ${({ theme }) => theme.colors.$primary};
`;
const FormLabel = styled.label`
  color: ${({ theme }) => theme.colors.$label};
`;
const TitleWrapper = styled.div`
  align-self: flex-start;
  position: relative;
  margin: 32px 0 16px 1.5rem;
`;
const H2 = styled.h2`
  font-size: ${({ theme }) => theme.size.$h2};
  color: ${({ theme }) => theme.colors.$subTitle};
  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.$white};
    bottom: 0;
    left: 0;
  }
`;
const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const SignUp = ({ userAuth, signUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    signUp({ email, password, name, surname });
  }

  if (userAuth.uid) return <Redirect to="/" />;
  return (
    <SignUpWrapper>
      <TitleWrapper>
        <H2>Register</H2>
      </TitleWrapper>
      <AuthForm onSubmit={handleSubmit}>
        <FormField label="name" onChange={e => setName(e.target.value)} />
        <FormField label="surname" onChange={e => setSurname(e.target.value)} />
        <FormField
          label="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter valid email"
        />
        <FormField
          label="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password need at least 6 characters"
        />
        <ButtonsContainer>
          <Button type="submit">Register</Button>
          <Button secondary type="submit">
            <Link to="signIn">Back</Link>
          </Button>
        </ButtonsContainer>
      </AuthForm>
    </SignUpWrapper>
  );
};

const mapStateToProps = state => ({
  userAuth: state.firebase.auth,
});

SignUp.propTypes = {
  signUp: PropTypes.func,
  userAuth: PropTypes.object,
};

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
