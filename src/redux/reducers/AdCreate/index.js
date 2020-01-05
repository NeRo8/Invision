import * as types from '../../actions/AdCreate/types';

const initState = {
  ad: {
    category: null,
    price: 0,
    is_seller_private: true,
    state: 'new',
    //Step2
    title: null,
    description: null,
  },
  //main

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
        ad: {
          ...state.ad,
          [action.name]: action.value,
        },
      };
    }
    default:
      return state;
  }
};

export default adCreateReducer;
