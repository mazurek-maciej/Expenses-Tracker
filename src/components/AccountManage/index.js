import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createWallet } from '../../actions/accountActions';

function AccountManage({ userId, createWallet }) {
  const [cash, setCash] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    createWallet(userId, cash);
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
  createWallet: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userId: state.firebase.auth.uid,
});

export default connect(
  mapStateToProps,
  { createWallet }
)(AccountManage);
