import types from '../types';

const init_state = {
  Cart: [],
};

export default function (state = init_state, action) {
  switch (action.type) {
    case types.ADDTOCART:
      const {thumbnail, title, description, price, id} = action.payload;
      return {
        ...state,
        Cart: [
          ...state.Cart,
          {
            thumnail: thumbnail,
            title: title,
            description: description,
            price: price,
            id: id,
          },
        ],
      };
    default:
      return {...state};
  }
}
