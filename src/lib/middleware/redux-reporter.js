export default store => next => (action) => {
  try {
    console.log('ACTION IN MIDDLEWARE: ', action); // eslint-disable-line
    const result = next(action);
    console.log('CURRENT REDUX STORE STATE: ', store.getState()); // eslint-disable-line
    return result;
  } catch (err) {
    console.error(err); // eslint-disable-line
    return next(action);
  }
};
