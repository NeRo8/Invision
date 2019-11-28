import {
  SET_NEWS,
  SET_NEWS_ARTICLE,
  SET_QUESTIONS,
  SET_EVENTS,
  SET_COUNT_LIST,
  SET_SERVICES,
  SET_LOADING,
} from '../actions/inKuwaitAction';

const initState = {
  countList: [],
  newsList: [],
  newsArticleData: [],
  questionsList: [],
  eventsList: [],
  servicesList: [],
  loadingNewsArticle: true,
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
    case SET_NEWS_ARTICLE: {
      return {
        ...state,
        newsArticleData: action.newsArticle,
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
    case SET_LOADING: {
      return {
        ...state,
        loadingNewsArticle: action.loadingNewsArticle,
      };
    }
    default:
      return state;
  }
};

export default inKuwaitReducer;
