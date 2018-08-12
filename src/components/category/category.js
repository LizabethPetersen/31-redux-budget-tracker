import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../category-form/form';
import * as categoryActions from '../../action/categoryActions';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expenseActions';
import Expense from '../expense/expense';
import './category.scss';

const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    categoryUpdate: data => dispatch(categoryActions.update(data)),
    createExpense: data => dispatch(expenseActions.createExpense(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

class Category extends React.Component {
  render() {
    const {
      expenses,
      createExpense,
      category,
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props;

    const categoryExpenses = expenses[category.id];

    return (
      <div className="category" key={key} data-cy="category">
        <h6>Budget Category: { category.title } </h6>
        <button onClick={() => categoryRemove(category)}>Delete Category</button>
        <Form category={category} onComplete={categoryUpdate}
        />
        <div className="expenses-form">
          <h6>Actual Expenses</h6>
            <ExpenseForm category={category}
              onComplete={createExpense} />
            <div className="expenses-list">
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
  category: PropTypes.object,
  key: PropTypes.number,
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
  createExpense: PropTypes.func,
  expenses: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
