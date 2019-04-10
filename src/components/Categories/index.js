import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import {
  createCategory,
  fetchCategories,
} from '../../actions/categoriesActions';

import CategoriesForm from '../Forms/CategoriesForm';

const CategoriesWrapper = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      <CategoriesWrapper>
        <CategoriesForm
          onSubmit={this.handleOnSubmit}
          categories={categories}
        />
      </CategoriesWrapper>
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
