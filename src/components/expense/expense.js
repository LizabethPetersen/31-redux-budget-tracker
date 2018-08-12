import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as expenseActions from '../../action/expenseActions';
import ExpenseForm from '../expense-form/expense-form';

const mapDispatchToProps = dispatch => ({
  removeExpense: data => dispatch(expenseActions.removeExpense(data)),
  updateExpense: data => dispatch(expenseActions.updateExpense(data)),
});

class Expense extends React.Component {
  render() {
    const { 
      expense,
      category, 
      removeExpense, 
      updateExpense,
    } = this.props;

    return (
      <div className="expense" data-cy="expense">
        <h4>Expense: { expense.title }, Amount: ${ expense.amount }</h4>
          <ExpenseForm
            expense={ expense }
            onComplete={ updateExpense }
            category={ category }
            />
            <button onClick={() => 
              removeExpense({ ...expense, categoryId: category._id }) }>Delete Expense</button>
      </div>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  category: PropTypes.object,
  removeExpense: PropTypes.func,
  updateExpense: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Expense);
