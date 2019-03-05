import React from 'react';
import CreateNew from './CreateNew';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.descRef = React.createRef();
    this.moneyRef = React.createRef();
    this.state = {
      content: {
        description: '',
        amountOfMoney: '',
        date: '',
        id: null,
        editable: false,
        category: '',
        incomeType: '',
      },
      newDate: new Date(),
      selectedType: '',
      selectedCategory: '',
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleBill(this.state.content);
    this.setState({content: {description: '', amountOfMoney: ''}});
  };
  handleInput = () => {
    const date = Date.now();
    this.setState({
      content: {
        description: this.descRef.current.value,
        amountOfMoney: this.moneyRef.current.value,
        id: date,
      },
    });
  };
  handleChangeDate = date => {
    let month = date.getUTCMonth() + 1;
    let year = date.getFullYear();
    let day = date.getUTCDate();
    let newDate = `${day}/${month}/${year}`;
    this.setState({
      content: {
        ...this.state.content,
        date: newDate,
      },
      newDate: date,
    });
  };
  handleCategories = category => {
    this.setState({
      content: {
        ...this.state.content,
        category: category.value,
      },
      selectedCategory: category,
    });
  };
  handleIncomeTypeChange = incomeType => {
    this.setState({
      content: {
        ...this.state.content,
        incomeType: incomeType.value,
      },
      selectedType: incomeType,
    });
  };

  render() {
    const {content} = this.state;
    const {selectedType, newDate, selectedCategory} = this.state;
    const {categoriesList} = this.props;
    return (
      <>
        <CreateNew
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          handleChangeDate={this.handleChangeDate}
          handleIncomeTypeChange={this.handleIncomeTypeChange}
          handleCategories={this.handleCategories}
          content={content}
          newDate={newDate}
          selectedType={selectedType}
          selectedCategory={selectedCategory}
          moneyRef={this.moneyRef}
          descRef={this.descRef}
          categoriesList={categoriesList}
        />
      </>
    );
  }
}
export default FormContainer;
