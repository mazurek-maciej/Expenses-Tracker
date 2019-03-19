import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../actions/authActions';

import { device } from '../../theme/theme';
import Button from '../Buttons/Button';
import AuthForm from '../Forms/AuthForm';
import FormField from '../Forms/AuthFormField';

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

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { userAuth } = this.props;
    if (userAuth.uid) return <Redirect to="/" />;
    return (
      <SignInWrapper>
        <TitleWrapper>
          <H2>Sign in</H2>
        </TitleWrapper>
        <AuthForm onSubmit={this.handleSubmit}>
          <FormField label="email" handleChange={this.handleChange} />
          <FormField label="password" handleChange={this.handleChange} />

          <div className="field">
            <Button type="submit">Sign In</Button>
          </div>
        </AuthForm>
      </SignInWrapper>
    );
  }
}

const mapStateToProps = state => ({
  userAuth: state.firebase.auth,
});

LoginScreen.propTypes = {
  userAuth: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  { signIn }
)(LoginScreen);
