import {getAllProduct} from '../../utils/utils';

import store from '../store';
import types from '../types';

const {dispatch} = store;

export const saveProduct = data => {
  dispatch({
    type: types.GETPRODUCT,
    payload: data,
  });
};

export function getProduct() {
  return getAllProduct()
    .then(res => {
      saveProduct(res.data);
      console.log('Api request ..', res.data);
    })
    .catch(err => {
      console.log(err);
    });
}
