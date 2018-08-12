import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../category-form/form';
import * as categoryActions from '../../action/categoryActions';

import ExpenseForm from '../expense-form/expense-form';
import Expense from '../expense/expense';
import * as expenseActions from '../../action/expenseActions';

import './category.scss';

const mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: data => dispatch(expenseActions.createExpense(data)),
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
  };
};

class Category extends React.Component {
  render() {
    const {
      expenses,
      expenseCreate,
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;

    const categoryExpenses = expenses[category.id];

    return (
      <div className="category" key={key}>
      <h1>{ category.title }</h1>
      <button onClick={ () => categoryRemove(category) }>Delete Category</button>
      <Form category={ category } onComplete={ categoryUpdate } />

      <div className="expenses">
        <ExpenseForm category={ category } onComplete={ expenseCreate } />
        <div className="expense-list">
          {
            categoryExpenses.map(expense => <Expense expense={expense} key={expense.id} />)
          }
        </div>
      </div>
    </div>
    );
  }
}

Category.propTypes = {
  expenses: PropTypes.array,
  expenseCreate: PropTypes.func,
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Category);
