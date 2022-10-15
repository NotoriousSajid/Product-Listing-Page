import store from '../store';
import types from '../types';

const {dispatch} = store;

export const saveCategory = data => {
  dispatch({
    type: types.CATEGORY,
    payload: data,
  });
};

export function setCategory(data) {
  saveCategory(data);
}
