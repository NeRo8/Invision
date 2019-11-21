//URL FOR ACTION
const IN_KUWAIT = 'https://staging.masaha.app/api/v1/';

export const SET_NEWS = 'SET_NEWS';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_EVENTS = 'SET_EVENTS';

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
