import uuid from 'uuid/v4';

const createExpense = ({ title, amount, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    title,
    amount,
    id: uuid(),
    timestamp: new Date(),
    categoryId,
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
