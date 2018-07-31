const emptyState = {};

export default (state = emptyState, { type, payload }) => {
  let categoryId;
  let expenses;
  let updatedExpenses;
  let updatedState;

  switch (type) {
    case 'CATEGORY_CREATE':
      return { ...state, [payload.id]: [] };
    case 'CATEGORY_REMOVE':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'EXPENSE_CREATE':
      categoryId = payload.categoryId; // eslint-disable-line
      expenses = state[categoryId];  
      updatedExpenses = { ...expenses, payload };
      return { ...state, [categoryId]: updatedExpenses };
    case 'EXPENSE_UPDATE':
      categoryId = payload.categoryId; // eslint-disable-line
      expenses = state[categoryId];
      updatedExpenses = categoryExpenses.map(expense => (expense.id === payload.id ? payload : expense)); // eslint-disable-line
      return { ...state, [categoryId]: updatedExpenses };
    case 'EXPENSE_REMOVE':
      categoryId = payload.categoryId; // eslint-disable-line
      expenses = state[categoryId];
      updatedExpenses = expenses.filter(expense => (expense.id !== payload.id));
      return { ...state, [categoryId]: updatedExpenses };
    default:
      return state;
  }
};
