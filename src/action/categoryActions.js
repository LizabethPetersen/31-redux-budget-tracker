import uuid from 'uuid/v4';

const create = ({ title, amount }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    amount,
    id: uuid(),
    createdOn: new Date().toLocaleDateString(),
  },
});

const update = category => ({
  type: 'CATEGORY_UPDATE',
  payload: {
    category,
  },
});

const remove = category => ({
  type: 'CATEGORY_REMOVE',
  payload: {
    category,
  },
});

export { create, update, remove };
