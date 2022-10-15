import types from '../types';

const init_state = {
  Category: 'smartphones',
};

export default function (state = init_state, action) {
  switch (action.type) {
    case types.CATEGORY:
      const data = action.payload;
      return {Category: data};
    default:
      return state;
  }
}
