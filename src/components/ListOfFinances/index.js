import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import IncomeOutcomeTile from './IncomeOutcomeTile';

import {removeBillAction} from '../../actions/removeBillAction';
import {editBillAction} from '../../actions/editBillAction';

class Index extends React.Component {
  displayBills() {
    return this.props.finances.map((singleFinance, index) => {
      if (singleFinance.length !== 0) {
        return (
          <IncomeOutcomeTile
            key={index}
            id={singleFinance.id}
            description={singleFinance.description}
            money={singleFinance.money}
            date={singleFinance.date}
            newDate={singleFinance.newDate}
            editable={singleFinance.editable}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        );
      }
    });
  }

  handleDelete = id => {
    this.props.removeBillAction(id);
  };
  handleEdit = id => {
    this.props.editBillAction(id);
  };

  render() {
    const {finances} = this.props;
    if (finances.length === 0) return <div>Add new bill to your list</div>;
    return <>{this.displayBills()}</>;
  }
}

const mapStateToProps = state => {
  return {
    finances: state.finances,
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({removeBillAction, editBillAction}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
