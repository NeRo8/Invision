import * as types from './types';

const initialState = {
  faqDetail: [],
  faqList: [],
  filters: {
    category: null,
    q: null,
    status: 'top',
  },
  categories: [],
  loading: true,
  error: null,
};

const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FAQ_LIST: {
      return {
        ...state,
        faqList: action.payload,
      };
    }
    case types.SET_FAQ_DETAIL: {
      return {
        ...state,
        faqDetail: action.payload,
      };
    }
    case types.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case types.SET_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.name]: action.value,
        },
      };
    }
    case types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case types.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default faqReducer;
