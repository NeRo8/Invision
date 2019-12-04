import { SET_FILTER } from '../actions/filtersAction';

const initialState = {
  filters: {
    query: null,
    city: null,
    typeOfAd: 'all',
    stateOfProduct: 'all',
    minPrice: 0,
    maxPrice: 900000,
    category: null,
    categories: null,
  },
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.name]: action.value,
        },
      };
    }
    default:
      return state;
  }
};

export default filtersReducer;
