import React from 'react';
import PropTypes from 'prop-types';
import './expense-form.scss';

const defaultState = {
  title: '',
  amount: 0,
  categoryId: '',
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense || defaultState;
    this.state.categoryId = props.categoryId;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    if (!this.props.expense) {
      this.setState(defaultState);
    }
  }

  render() {
    // const { expense } = this.props;
    const buttonText = this.props.expense ? 'Update Expense' : 'Create Expense';
    const formText = this.props.expense ? 'Update Expense' : 'Create Expense';
    return (
      <fieldset className='expense-form' data-cy='expense-form'>
      <form 
        onSubmit={ this.handleSubmit }
      >
        <label htmlFor="title">{formText}</label>
        <input 
          type="text"
          name="title"
          placeholder="New Expense"
          value={this.state.title}
          onChange={this.handleChange}
        />
        
        <label htmlFor="expense">{formText}</label>
        <input
          type="number"
          name="amount"
          min="0"
          placeholder="Expense Amount"
          value={this.state.amount}
          onChange={this.handleChange}
          />
          <button type="submit">{buttonText}</button>
      </form> 
      </fieldset>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  expense: PropTypes.object,
  categoryId: PropTypes.string,
};
