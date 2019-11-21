import { SET_NEWS, SET_QUESTIONS, SET_EVENTS } from '../actions/inKuwaitAction';

const initState = {
  newsList: [],
  questionsList: [],
  eventsList: [],
};
const inKuwaitReducer = (state = initState, action) => {
  switch (action.type) {
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
