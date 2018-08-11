import React from 'react';
import PropTypes from 'prop-types';
import './expense-form.scss';

const emptyState = {
  content: '',
};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
  }

  handleSubmit = (event) => {
    this.setState({ content: event.target.value });
  }

  handleChange = (event) => {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;
    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.state(emptyState);
  }


  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Delete Expense';
    const formText = expense ? `Update ${expense.content} Expense` : 'Create Expense';
    return (
      <form 
        className='expense-form'
        data-cy='expense-form'
        onSubmit={ this.handleSubmit }
      >
        <label htmlFor="content">{ formText }</label>
        <input
          type="text"
          name="content"
          placeholder="Enter New Expense"
          value={ this.state.content }
          onChange={ this.handleChange }
          />
          <button type="submit">{ buttonText }</button>
      </form> 
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  expense: PropTypes.object,
};
