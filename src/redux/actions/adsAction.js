import { getData } from '../../utils/AsyncStorage';

//URL FOR ACTION
const ADS = 'https://staging.masaha.app/api/v1/ads/';

export const SET_ADS_ADS = 'SET_ADS_ADS';
export const SET_ADS_AD = 'SET_ADS_AD';
export const SET_ADS_CATEGORIES = 'SET_ADS_CATEGORIES';
export const SET_ADS_FAVORITES = 'SET_ADS_FAVORITES';

export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';

const setAdsAds = ads => ({
  type: SET_ADS_ADS,
  ads,
});
const setAdsAd = ad => ({
  type: SET_ADS_AD,
  ad,
});
const setCategories = categories => ({
  type: SET_ADS_CATEGORIES,
  categories,
});
const setFavorites = ads => ({
  type: SET_ADS_FAVORITES,
  ads,
});

const setError = error => ({
  type: SET_ERROR,
  error,
});

const setLoading = (loading, loadingAd) => ({
  type: SET_LOADING,
  loading,
  loadingAd,
});

//API REDUX
export const getAds = filters => dispatch => {
  dispatch(setLoading(true, true));

  var requestString = `${ADS}ads/`;

  if (filters !== undefined && filters.categories !== undefined) {
    requestString += `?category=${filters.categories}`;
  }

  fetch(requestString, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setAdsAds(responseJson.results));
      dispatch(setLoading(false, true));
    })
    .catch(error => {
      dispatch(setError(error));
    });
};

export const getAd = (productId, token) => dispatch => {
  dispatch(setLoading(false, true));

  fetch(`${ADS}ad/${productId}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setAdsAd(responseJson));
      dispatch(setLoading(false, false));
    })
    .catch(error => {
      dispatch(setError(error));
    });
};

export const getAdsFavorites = (token, filters = null) => dispatch => {
  const autorization = 'Bearer ' + token;
  fetch(`${ADS}favorites/`, {
    method: 'GET',
    headers: {
      Authorization: autorization,
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(responseJson => dispatch(setFavorites(responseJson.results)))
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
