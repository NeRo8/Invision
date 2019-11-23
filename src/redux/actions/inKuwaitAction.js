//URL FOR ACTION
const IN_KUWAIT = 'https://staging.masaha.app/api/v1/';
const IN_KUWAIT_COMMON =
  'https://staging.masaha.app/api/v1/common/living-in-kuwait/';

export const SET_NEWS = 'SET_NEWS';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_EVENTS = 'SET_EVENTS';
export const SET_SERVICES = 'SET_SERVICES';
export const SET_COUNT_LIST = 'SET_COUNT_LIST';

const setNews = news => ({
  type: SET_NEWS,
  news,
});
const setQuestions = questions => ({
  type: SET_QUESTIONS,
  questions,
});
const setEvents = events => ({
  type: SET_EVENTS,
  events,
});
const setServices = services => ({
  type: SET_SERVICES,
  services,
});

const setCountList = countList => ({
  type: SET_COUNT_LIST,
  countList,
});

export const getCountList = () => dispatch => {
  fetch(`${IN_KUWAIT_COMMON}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setCountList(responseJson));
    })
    .catch(error => {
      console.error(error);
    });
};

//API REDUX
export const getNews = filters => dispatch => {
  fetch(`${IN_KUWAIT}blog/news/`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setNews(responseJson.results));
    })
    .catch(error => {
      console.error(error);
    });
};

export const getQuestions = filters => dispatch => {
  fetch(`${IN_KUWAIT}faq/questions/`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setQuestions(responseJson.results));
    })
    .catch(error => {
      console.error(error);
    });
};

export const getEvents = filters => dispatch => {
  fetch(`${IN_KUWAIT}events/events/`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setEvents(responseJson.results));
      console.log(responseJson);
    })
    .catch(error => {
      console.error(error);
    });
};

export const getServices = filters => dispatch => {
  fetch(`${IN_KUWAIT}common/services/`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setServices(responseJson.results));
      console.log(responseJson);
    })
    .catch(error => {
      console.error(error);
    });
};
