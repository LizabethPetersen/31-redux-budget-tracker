import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../category-form/form';
import * as categoryActions from '../../action/categoryActions';
import Expense from '../expense/expense';
import * as expenseActions from '../../action/expenseActions';
import ExpenseForm from '../expense-form/expense-form';
import './category.scss';

const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
    createExpense: data => dispatch(expenseActions.createExpense(data)),
  };
};

const mapStateToProps = (store, ownProps) => {
  return {
    expenses: store.expenses[ownProps.categoryId],
  };
};

class Category extends React.Component {
  render() {
    const {
      category,
      expenses,
      key,
      categoryRemove,
      categoryUpdate,
      createExpense,
    } = this.props;

    const categoryExpenses = expenses[category.id];

    return (
      <div className="category" key={key}>
        <h2>Budget Category: {category.title}</h2>
          <h4>Budget: ${category.amount},
          Expenses: {categoryExpenses}</h4>
          <button onClick={() => categoryRemove(category) }>Delete Category</button>
            <Form category={category} onComplete={categoryUpdate}/>
            <ExpenseForm onComplete={createExpense} categoryId={category.id} />
        <div className="expense-list">
        { 
          expenses.map(expense => 
          <Expense expense={expense} key={expense.id} categoryId={category.id}/>) 
        }
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  expenses: PropTypes.array,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
  createExpense: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
