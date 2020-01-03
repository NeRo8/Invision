import {
  SET_SERVICES,
  SET_CATEGORIES,
  SET_LOADING,
  SET_ERROR,
  SET_FILTER,
} from '../../../actions/inKuwait/servicesAction/types';

const initialState = {
  servicesList: [],
  filters: {
    category: null,
    q: null,
  },
  categories: [],
  loading: true,
  error: null,
};

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SERVICES: {
      return {
        ...state,
        servicesList: action.payload,
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

export default servicesReducer;
