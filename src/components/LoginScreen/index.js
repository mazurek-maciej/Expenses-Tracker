import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../actions/authActions';
import { Consumer } from '../../store';
import { device } from '../../theme/theme';
import Button from '../Buttons/Button';
import AuthForm from '../Forms/AuthForm';
import FormField from '../Forms/AuthFormField';

const TestButton = styled.button``;
const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
  height: calc(100vh - 80px);
  margin: 0 auto;
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

const LoginScreen = ({ userAuth, signIn }) => {
  const emailInput = useFormInput('');
  const passwordInput = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();
    const { value: email } = emailInput;
    const { value: password } = passwordInput;
    signIn({ email, password });
  }

  if (userAuth.uid) return <Redirect to="/" />;
  return (
    <SignInWrapper>
      <TitleWrapper>
        <H2>Sign in</H2>
      </TitleWrapper>
      <AuthForm onSubmit={handleSubmit}>
        <FormField label="email" {...emailInput} />
        <FormField label="password" {...passwordInput} />
        <div className="field">
          <Button type="submit">Sign In</Button>
        </div>
      </AuthForm>
    </SignInWrapper>
  );
};

function useFormInput(initialValues) {
  const [value, setValue] = useState(initialValues);

  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}

const mapStateToProps = state => ({
  userAuth: state.firebase.auth,
});

LoginScreen.propTypes = {
  userAuth: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { signIn }
)(LoginScreen);
