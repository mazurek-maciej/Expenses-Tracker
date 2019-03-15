import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../actions/authActions';

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
      <div className="container">
        <div className="columns">
          <div className="column is-7">
            <form onSubmit={this.handleSubmit}>
              <h3 className="subtitle">Zaloguj się</h3>
              <div className="field">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input"
                  type="email"
                  id="email"
                  placeholder="Podaj swój email"
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
                  placeholder="Podaj swoje hasło"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <button className="button is-success">Zaloguj</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userAuth: state.firebase.auth,
});

export default connect(
  mapStateToProps,
  { signIn }
)(LoginScreen);
