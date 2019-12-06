import {
  SET_FAQ_DETAIL,
  SET_FAQ_LIST,
  SET_CATEGORIES,
  SET_LOADING,
  SET_ERROR,
  SET_FILTER,
} from '../../../actions/inKuwait/faqAction/types';

const initialState = {
  faqDetail: [],
  faqList: [],
  filters: {
    category: null,
    q: null,
    status: null,
  },
  categories: [],
  loading: true,
  error: null,
};

const faqReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAQ_LIST: {
      return {
        ...state,
        faqList: action.payload,
      };
    }
    case SET_FAQ_DETAIL: {
      return {
        ...state,
        faqDetail: action.payload,
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

export default faqReducer;
