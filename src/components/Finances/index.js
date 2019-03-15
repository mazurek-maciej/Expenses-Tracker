import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import FinancesForm from './FinancesForm';

const AddFormWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
  height: 100vh;
`;
const TitleWraper = styled.div`
  align-self: flex-start;
  position: relative;
  margin: 32px 0 16px 16px;
`;
const H2 = styled.h2`
  font-size: ${({ theme }) => theme.size.$h2};
  color: ${({ theme }) => theme.colors.$D13};
  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.$D13};
    bottom: 0;
    left: 0;
  }
`;

class Finances extends React.Component {
  render() {
    const { userAuth, categories } = this.props;
    if (!userAuth.uid) return <Redirect to="/signIn" />;
    return (
      <AddFormWraper>
        <TitleWraper>
          <H2>Add finance</H2>
        </TitleWraper>
        <FinancesForm categories={categories} />
      </AddFormWraper>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  userAuth: state.firebase.auth,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

Finances.propTypes = {
  userAuth: PropTypes.object.isRequired,
  categories: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Finances);
