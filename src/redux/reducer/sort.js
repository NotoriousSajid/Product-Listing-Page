import types from '../types';

const init_state = {
  Sort: 'ltoh',
};

export default function (state = init_state, action) {
  switch (action.type) {
    case types.SORT:
      const data = action.payload;
      return {Sort: data};
    default:
      return state;
  }
}
