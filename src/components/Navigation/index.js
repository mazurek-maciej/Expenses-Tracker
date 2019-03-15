import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Index = props => <NavigationBar />;

const mapStateToProps = state => ({
  userId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps)(Index);
