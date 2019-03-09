import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
