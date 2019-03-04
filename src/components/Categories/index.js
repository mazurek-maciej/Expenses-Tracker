import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import AddComponent from './AddComponent';
import CategoriesList from './CategoriesList';

import {addCategoryAction} from '../../actions/addCategoryAction';
import {removeCategoryAction} from '../../actions/removeCategoryAction';

class CategoriesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      category: '',
      selectedCategory: null,
    };
    this.inputRef = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCategoryAction(this.state);
    this.setState({
      category: '',
    });
  };
  handleInput = () => {
    this.setState({
      id: Date.now(),
      category: this.inputRef.current.value,
    });
    console.log(this.state);
  };
  handleSelectCategory = selectedCategory => {
    this.setState({selectedCategory: selectedCategory});
    console.log(`Category selected:`, selectedCategory.value);
  };

  render() {
    const {category, selectedCategory} = this.state;
    return (
      <div>
        <AddComponent
          category={category}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          inputRef={this.inputRef}
          category={category}
        />
        <CategoriesList
          selectedCategory={selectedCategory}
          handleSelectCategory={this.handleSelectCategory}
          categories={this.props.categories}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    categories: state.categories,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {addCategoryAction, removeCategoryAction},
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesIndex);
