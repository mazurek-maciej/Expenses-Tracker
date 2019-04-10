import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { fetchCategories } from '../../actions/categoriesActions';
import FinancesForm from './FinancesForm';

const AddFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 80px);
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;
const TitleWrapper = styled.div`
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
  componentDidMount() {
    this.props.fetchCategories(this.props.firebaseId);
  }

  render() {
    const { firebaseId, categories } = this.props;
    if (!firebaseId) return <Redirect to="/signIn" />;
    return (
      <AddFormWrapper>
        <TitleWrapper>
          <H2>Add finance</H2>
        </TitleWrapper>
        <FinancesForm categories={categories} />
      </AddFormWrapper>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  firebaseId: state.firebase.auth.uid,
});

Finances.propTypes = {
  firebaseId: PropTypes.string.isRequired,
  categories: PropTypes.object,
};

export default connect(
  mapStateToProps,
  { fetchCategories }
)(Finances);
