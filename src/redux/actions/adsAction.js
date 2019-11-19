//URL FOR ACTION
const ADS = 'https://staging.masaha.app/api/v1/ads/';

export const SET_ADS_ADS = 'SET_ADS_ADS';
export const SET_ADS_CATEGORIES = 'SET_ADS_CATEGORIES';
export const SET_ADS_FAVORITES = 'SET_ADS_FAVORITES';

const setAdsAds = ads => ({
  type: SET_ADS_ADS,
  ads,
});
const setCategories = categories => ({
  type: SET_ADS_CATEGORIES,
  categories,
});
const setFavorites = ads => ({
  type: SET_ADS_FAVORITES,
  ads,
});

//API REDUX
export const getAds = filters => dispatch => {
  fetch(`${ADS}ads/`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setAdsAds(responseJson.results));
    })
    .catch(error => {
      console.error(error);
    });
};
export const getAdsFavorites = filters => dispatch => {
  fetch(`${ADS}favorites/`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log('wtf', responseJson);
      dispatch(setFavorites(responseJson.results));
    })
    .catch(error => {
      console.error(error);
    });
};
export const getCategories = filters => dispatch => {
  fetch(`${ADS}categories/`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setCategories(responseJson.results));
    })
    .catch(error => {
      console.error(error);
    });
};
