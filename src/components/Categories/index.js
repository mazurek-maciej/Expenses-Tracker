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

const CategoriesWraper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class CategoriesIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  onSubmit = formValues => {
    this.props.createCategory(formValues);
  };

  render() {
    const { categories } = this.props;
    return (
      <CategoriesWraper>
        <CategoriesForm
          handleOnSubmit={this.onSubmit}
          categories={categories}
        />
      </CategoriesWraper>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
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
