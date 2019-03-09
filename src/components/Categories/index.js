import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import AppendCategory from "./AppendCategory";
import SelectCategory from "./SelectCategory";

import CategoryForm from "./CategoryForm";

import { addCategoryAction } from "../../actions/addCategoryAction";
import { removeCategoryAction } from "../../actions/removeCategoryAction";

class CategoriesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      category: "",
      selectedCategory: null
    };
    this.inputRef = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCategoryAction(this.state);
    this.setState({
      category: ""
    });
  };
  handleInput = () => {
    this.setState({
      id: Date.now(),
      category: this.inputRef.current.value
    });
    console.log(this.state);
  };
  handleSelectCategory = selectedCategory => {
    this.setState({ selectedCategory: selectedCategory });
    console.log(`Category selected:`, selectedCategory.value);
  };

  render() {
    const { category, selectedCategory } = this.state;
    return (
      <div>
        <CategoryForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addCategoryAction, removeCategoryAction },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesIndex);
