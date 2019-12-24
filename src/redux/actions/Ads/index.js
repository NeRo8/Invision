const ADS = 'https://staging.masaha.app/api/v1/ads/';

import {
  SET_LIST,
  SET_DETAIL,
  SET_FILTER,
  SET_LOADING,
  SET_ERROR,
  SET_CATEGORIES,
  SET_LOAD_MORE,
  SET_FAVORITES_LIST,
  SET_SELLER_PROFILE,
} from './types';

const setAdsList = ads => ({
  type: SET_LIST,
  payload: ads,
});

const setAdsDetail = ad => ({
  type: SET_DETAIL,
  payload: ad,
});

const setAdsLoadMore = ads => ({
  type: SET_LOAD_MORE,
  payload: ads,
});

const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setFilter = (name, value) => ({
  type: SET_FILTER,
  name,
  value,
});

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: loading,
});

const setError = error => ({
  type: SET_ERROR,
  payload: error,
});

const setAdsFavorites = favorites => ({
  type: SET_FAVORITES_LIST,
  payload: favorites,
});

const setSellerProfile = user => ({
  type: SET_SELLER_PROFILE,
  payload: user,
});

//API REDUX
export const getAds = (filters = null, token = null) => dispatch => {
  dispatch(setLoading(true));

  var requestUrl = `${ADS}ads/?`;

  if (filters !== null) {
    Object.keys(filters).forEach(item => {
      if (filters[item] !== null) {
        requestUrl += `&${item}=${filters[item]}`;
      }
    });
  }

  let head = {
    method: 'GET',
  };

  if (token !== null) {
    head = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
  }

  fetch(requestUrl, head)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      dispatch(setAdsList(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
    });
};

export const getAdsDetail = (id, token = null) => dispatch => {
  dispatch(setLoading(true));

  let head = {
    method: 'GET',
  };

  if (token !== null) {
    head = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
  }
  fetch(`${ADS}ad/${id}/?`, head)
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setAdsDetail(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
    });
};

export const getCategories = () => dispatch => {
  dispatch(setLoading(true));

  var requestString = `${ADS}categories/?`;

  fetch(requestString, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setCategories(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(setError(error));
    });
};

export const getAdsLoadMore = url => dispatch => {
  if (url === null) {
    dispatch(setError('Next not exist'));
  } else {
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(setAdsLoadMore(responseJson));
      })
      .catch(error => {
        dispatch(setError(error));
      });
  }
};

export const addToFavorite = (id, token) => dispatch => {
  var requestData = new FormData();
  requestData.append('ad_id', id);

  fetch(`${ADS}/add-favorite/`, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
    body: requestData,
  })
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));

  dispatch(getAdsDetail(id, token));
};

export const removeFromFavorite = (id, token) => dispatch => {
  fetch(`${ADS}/delete-favorite/${id}/`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));

  dispatch(getAdsDetail(id, token));
};

export const getAdsFavorites = token => dispatch => {
  dispatch(setLoading(true));

  fetch(`${ADS}favorites/`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setAdsFavorites(responseJson));
      dispatch(setLoading(false));
    })
    .catch(error => dispatch(setError(error)));
};

export const getSellerProfile = userid => dispatch => {
  setLoading(true);

  fetch(`${ADS}seller/${userid}/`)
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setSellerProfile(responseJson));
      dispatch(setLoading(false));
    })
    .then(error => {
      dispatch(setError(error));
      dispatch(setLoading(false));
    });
};

export const setComment = (data, token) => dispatch => {
  fetch(`${ADS}/ad-comment/`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => console.log(error));

  dispatch(getAdsDetail(data.ad, token));
};
