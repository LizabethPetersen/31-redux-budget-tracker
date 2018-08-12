const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  let categoryId;
  let categoryExpense;
  let updatedExpense;
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
      categoryExpense = state[categoryId];  
      updatedExpense = { ...categoryExpense, payload };
      return { ...state, [categoryId]: updatedExpense };
    case 'EXPENSE_UPDATE':
      categoryId = payload.categoryId; // eslint-disable-line
      categoryExpense = state[categoryId];
      updatedExpense = categoryExpenses.map(expense => (expense.id === payload.id ? payload : expense)); // eslint-disable-line
      return { ...state, [categoryId]: updatedExpense };
    case 'EXPENSE_REMOVE':
      categoryId = payload.categoryId; // eslint-disable-line
      categoryExpense = state[categoryId];
      updatedExpense = categoryExpense.filter(expense => (expense.id !== payload.id));
      return { ...state, [categoryId]: updatedExpense };
    default:
      return state;
  }
};
