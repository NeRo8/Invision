import {
  SET_NEWS,
  SET_QUESTIONS,
  SET_EVENTS,
  SET_COUNT_LIST,
} from '../actions/inKuwaitAction';

const initState = {
  countList: [],
  newsList: [],
  questionsList: [],
  eventsList: [],
};
const inKuwaitReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_COUNT_LIST: {
      return {
        ...state,
        countList: action.countList,
      };
    }
    case SET_NEWS: {
      return {
        ...state,
        newsList: action.news,
      };
    }
    case SET_QUESTIONS: {
      return {
        ...state,
        questionsList: action.questions,
      };
    }
    case SET_EVENTS: {
      return {
        ...state,
        eventsList: action.events,
      };
    }

    default:
      return state;
  }
};

export default inKuwaitReducer;
