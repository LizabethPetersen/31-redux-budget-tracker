import uuid from 'uuid/v4';

const create = ({ name, amount }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    amount,
    id: uuid(),
    createdOn: new Date(),
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
