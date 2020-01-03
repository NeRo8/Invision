import * as types from '../../actions/Chat/types';

const initState = {
  threads: null,
  messages: null,
  loading: true,
  error: null,
};

const chatReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_THREADS: {
      return {
        ...state,
        threads: action.payload,
      };
    }
    case types.SET_MESSAGES: {
      return {
        ...state,
        messages: action.payload,
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
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default chatReducer;
