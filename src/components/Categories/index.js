import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  createCategory,
  fetchCategories,
} from '../../actions/categoriesActions';

import CategoriesForm from '../Forms/CategoriesForm';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;
const CategoriesWrapper = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
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

class CategoriesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCategories(this.props.firebaseId);
  }

  handleOnSubmit = formValues => {
    console.log(formValues, this.props.firebaseId);
    this.props.createCategory(formValues, this.props.firebaseId);
  };

  render() {
    const { categories } = this.props;
    return (
      <Wrapper>
        <TitleWrapper>
          <H2>Create new category</H2>
        </TitleWrapper>
        <CategoriesWrapper>
          <CategoriesForm
            onSubmit={this.handleOnSubmit}
            categories={categories}
          />
        </CategoriesWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  firebaseId: state.firebase.auth.uid,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ createCategory, fetchCategories }, dispatch);

CategoriesIndex.propTypes = {
  categories: PropTypes.object.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  createCategory: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesIndex);
