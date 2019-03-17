import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFinance, editFinance } from '../../actions/financeActions';
import { fetchCategories } from '../../actions/categoriesActions';
import FinancesFormComponent from '../Forms/FinancesForm';

const EditFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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

class EditFinance extends React.Component {
  componentDidMount() {
    this.props.fetchFinance(this.props.match.params.id);
    this.props.fetchCategories();
  }

  handleOnSubmit = formValues => {
    this.props.editFinance(this.props.match.params.id, formValues);
  };

  render() {
    const { finance, categories } = this.props;
    if (!finance) return <div>Loading...</div>;
    return (
      <EditFormWrapper>
        <TitleWrapper>
          <H2>Edit</H2>
        </TitleWrapper>
        <FinancesFormComponent
          initialValues={finance}
          onSubmit={this.handleOnSubmit}
          categories={categories}
        />
      </EditFormWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  finance: state.finances[ownProps.match.params.id],
  categories: state.categories,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchFinance, fetchCategories, editFinance }, dispatch);

EditFinance.propTypes = {
  finance: PropTypes.object,
  categories: PropTypes.object.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  fetchFinance: PropTypes.func.isRequired,
  editFinance: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFinance);
