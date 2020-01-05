import * as types from '../../actions/AdCreate/types';

const initState = {
  categories: [],
};

const adCreateReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
  }
};

export const adCreateReducer;
