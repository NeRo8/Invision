import {
  SET_DETAIL,
  SET_LIST,
  SET_CATEGORIES,
  SET_LOADING,
  SET_ERROR,
  SET_FILTER,
} from '../../../actions/inKuwait/newsAction/types';

const initialState = {
  newsDetail: [],
  newsList: [],
  filters: {
    category: null,
    q: null,
    order_by: 'date',
  },
  categories: [],
  loading: true,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST: {
      return {
        ...state,
        newsList: action.payload,
      };
    }
    case SET_DETAIL: {
      return {
        ...state,
        newsDetail: action.payload,
      };
    }
    case SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.name]: action.value,
        },
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default newsReducer;
