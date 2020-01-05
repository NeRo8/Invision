import * as types from '../../actions/AdCreate/types';

const initState = {
  //main
  category: null,
  price: 0,
  isSellerPrivate: true,
  stateProduct: 'new',
  //utils
  categories: null,
};

const adCreateReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case types.SET_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    default:
      return state;
  }
};

export default adCreateReducer;
