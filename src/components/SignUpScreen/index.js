import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { signUp } from '../../actions/authActions';

const Wraper = styled.div`
  width: 100vw;
  height: 80vh;
  h3 {
    font-weight: 600;
  }
`;
const Error = styled.p`
  color: ${({ theme }) => theme.colors.$primary};
`;

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    surname: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
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
      <Wraper>
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-7">
                <form onSubmit={this.handleSubmit}>
                  <h3 className="subtitle">Zarejestruj się</h3>
                  <div className="field">
                    <label className="label" htmlFor="password">
                      Imię
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="name"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="password">
                      Nazwisko
                    </label>
                    <input
                      className="input"
                      type="text"
                      id="surname"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="input"
                      type="email"
                      id="email"
                      placeholder="Podaj poprawny adres email"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="field">
                    <label className="label" htmlFor="password">
                      Hasło
                    </label>
                    <input
                      className="input"
                      type="password"
                      id="password"
                      placeholder="Hasło musi mieć conajmniej 6 znaków"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="field" />
                  <div className="field">
                    <button type="submit" className="button is-success">
                      Rejestracja
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Wraper>
    );
  }
}

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
