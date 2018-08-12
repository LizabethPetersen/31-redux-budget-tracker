import uuid from 'uuid/v4';

const createExpense = ({ amount, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    amount,
    categoryId,
    id: uuid(),
  },
});

const updateExpense = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

const removeExpense = expense => ({
  type: 'EXPENSE_REMOVE',
  payload: expense,
});

export { createExpense, updateExpense, removeExpense };
