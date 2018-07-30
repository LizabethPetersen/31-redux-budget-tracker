export default store => next => (action) => {
  const result = next(action);

  const reduxStore = store.getState();
  console.log('SESSION MIDDLEWARE'); // eslint-disable-line

  /* eslint-disable */
  for (const key in reduxStore) {
    if (!localStorage[key]) {
      localStorage[key] = JSON.stringify(reduxStore[key]);
    }
  }
  return result;
};
