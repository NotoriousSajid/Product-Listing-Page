import store from '../store';
import types from '../types';

const {dispatch} = store;

export const saveCart = (thumbnail, title, description, price, id) => {
  dispatch({
    type: types.ADDTOCART,
    payload: {
      thumbnail: thumbnail,
      title: title,
      description: description,
      price: price,
      id: id,
    },
  });
};

export function setCart(thumbnail, title, description, price, id) {
  saveCart(thumbnail, title, description, price, id);
}
