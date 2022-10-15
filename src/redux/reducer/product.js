import types from '../types';

const init_state = {
  AllProduct: {},
};

export default function (state = init_state, action) {
  switch (action.type) {
    case types.GETPRODUCT:
      const data = action.payload;
      return {AllProduct: data};
    default:
      return state;
  }
}
