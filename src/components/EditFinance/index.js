import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EditFinanceField from './EditFinanceField';

import 'react-datepicker/dist/react-datepicker.css';

class EditFinance extends React.Component {
  render() {
    const { categories } = this.props;
    return <EditFinanceField categories={categories} />;
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

EditFinance.propTypes = {
  categories: PropTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFinance);
