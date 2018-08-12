import React from 'react';
import PropTypes from 'prop-types';
import './expense-form.scss';

const defaultState = {
  title: '',
  amount: 0,
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense || defaultState;
  }

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // }

  handleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const categoryId = this.props.category ?
      this.props.category.id :
      this.props.expense.categoryId;

    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(defaultState);
  }

  render() {
    console.log(this.props, 'This is working!!!!!!');
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';
    const formText = expense ? `Update ${expense.title} Expense` : 'Create Expense';
    
    return (
      <form 
        className='expense-form' 
        data-cy='expense-form'
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="title">{formText}</label>
        <input 
          type="text"
          name="title"
          placeholder="Actual Expense"
          value={this.state.title}
          onChange={this.handleChange}
        />
        
        {/* <label htmlFor="expense">{formText}</label>
        <input
          type="number"
          name="amount"
          min="0"
          placeholder="Expense Amount"
          value={this.state.amount}
          onChange={this.handleChange}
          /> */}
          <button type="submit">{buttonText}</button>
      </form> 
    );
  }
}

ExpenseForm.propTypes = {
  expense: PropTypes.object,
  category: PropTypes.object,
  categoryId: PropTypes.string,
  onComplete: PropTypes.func,
};
