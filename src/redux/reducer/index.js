import {combineReducers} from 'redux';
import product from './product';
import category from './category';
import sort from './sort';
import cart from './cart';

const appReducer = combineReducers({
  product,
  category,
  sort,
  cart,
});

export default appReducer;
