import {
  SET_EVENTS_DETAIL,
  SET_EVENTS_LIST,
  SET_CATEGORIES,
  SET_LOADING,
  SET_ERROR,
  SET_FILTER,
} from '../../../actions/inKuwait/eventsAction/types';

const initialState = {
  eventsDetail: [],
  eventsList: [],
  filters: {
    category: null,
    q: null,
    status: null,
    date: null,
  },
  categories: [],
  loading: true,
  error: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS_LIST: {
      return {
        ...state,
        eventsList: action.payload,
      };
    }
    case SET_EVENTS_DETAIL: {
      return {
        ...state,
        eventsDetail: action.payload,
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

export default eventsReducer;
