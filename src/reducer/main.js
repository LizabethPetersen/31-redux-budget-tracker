import { combineReducers } from '../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import categories from './category';
import expenses from './expense';

export default combineReducers({
  categories,
  expenses,
});
