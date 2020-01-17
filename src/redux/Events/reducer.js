import * as types from './types';

const initialState = {
  eventsDetail: [],
  eventsList: [],
  filters: {
    category: null,
    q: null,
    status: 'upcoming',
    date: null,
  },
  categories: [],
  loading: true,
  error: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EVENTS_LIST: {
      return {
        ...state,
        eventsList: action.payload,
      };
    }
    case types.SET_EVENTS_DETAIL: {
      return {
        ...state,
        eventsDetail: action.payload,
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

export default eventsReducer;
