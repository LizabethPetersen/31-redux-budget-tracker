import uuid from 'uuid/v4';

export const createExpense = ({ amount, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    amount,
    categoryId,
    id: uuid(),
  },
});

export const updateExpense = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const removeExpense = expense => ({
  type: 'EXPENSE_REMOVE',
  payload: expense,
});
