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
        type: '',
      },
      newDate: new Date(),
      selectedType: '',
      selectedCategory: '',
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleBill(this.state.content);
    this.setState({description: '', amountOfMoney: ''});
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
  handleTypeChange = type => {
    this.setState({
      content: {
        ...this.state.content,
        type: type.value,
      },
      selectedType: type,
    });
  };

  render() {
    const {description, amountOfMoney} = this.state.content;
    const {selectedType, newDate, selectedCategory} = this.state;
    const {categoriesList} = this.props;
    return (
      <>
        <CreateNew
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          handleChangeDate={this.handleChangeDate}
          handleTypeChange={this.handleTypeChange}
          handleCategories={this.handleCategories}
          amountOfMoney={amountOfMoney}
          description={description}
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
