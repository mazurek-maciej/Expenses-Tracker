import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createAccountValet } from '../../actions/accountActions';

function AccountManage({ userId, createAccountValet }) {
  const [cash, setCash] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    createAccountValet(userId, cash);
  }

  if (!userId) return <Redirect to="/signIn" />;

  return (
    <div style={{ height: '100vh' }}>
      AccountManage
      <form onSubmit={handleSubmit}>
        <label>Create new valet</label>
        <input type="text" onChange={e => setCash(e.target.value)} />
      </form>
    </div>
  );
}

AccountManage.propTypes = {
  userId: PropTypes.string.isRequired,
  createAccountValet: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.firebase.auth.uid,
});

export default connect(
  mapStateToProps,
  { createAccountValet }
)(AccountManage);
