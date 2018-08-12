import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expenseActions';

const mapDispatchToProps = dispatch => ({
  removeExpense: data => dispatch(expenseActions.removeExpense(data)),
  updateExpense: data => dispatch(expenseActions.updateExpense(data)),
});

class Expense extends React.Component {
  render() {
    const { 
      expense,
      key,
      categoryId, 
      removeExpense, 
      updateExpense,
    } = this.props;

    return (
      <div className="expense" key={key} data-cy="expense">
        <h4>Budget Item: { expense.title }, Amount: ${ expense.amount }</h4>
          <button onClick={() => removeExpense(expense) }>Delete Expense</button>
          <ExpenseForm
            expense={ expense }
            categoryId={ categoryId }
            onComplete={ updateExpense }
          />
      </div>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  key: PropTypes.number,
  categoryId: PropTypes.string,
  removeExpense: PropTypes.func,
  updateExpense: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Expense);
