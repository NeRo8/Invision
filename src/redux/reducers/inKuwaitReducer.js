import {
  SET_NEWS,
  SET_QUESTIONS,
  SET_EVENTS,
  SET_COUNT_LIST,
  SET_SERVICES,
  SET_LOADING,
  SET_NEWS_DETAIL,
  SET_ERROR,
} from '../actions/inKuwaitAction';

const initState = {
  newsList: [],
  newsDetail: [],
  countList: [],

  questionsList: [],
  eventsList: [],
  servicesList: [],
  loadingNews: true,
  error: null,
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
    case SET_SERVICES: {
      return {
        ...state,
        servicesList: action.services,
      };
    }
    case SET_NEWS_DETAIL: {
      return {
        ...state,
        newsDetail: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loadingNews: action.payload,
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

export default inKuwaitReducer;
