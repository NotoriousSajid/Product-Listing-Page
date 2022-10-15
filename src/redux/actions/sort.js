import store from '../store';
import types from '../types';

const {dispatch} = store;

export const saveSort = data => {
  dispatch({
    type: types.SORT,
    payload: data,
  });
};

export function setSortData(data) {
  saveSort(data);
}
