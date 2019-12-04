import { getData } from '../../utils/AsyncStorage';

//URL FOR ACTION
const ADS = 'https://staging.masaha.app/api/v1/ads/';

export const SET_ADS_ADS = 'SET_ADS_ADS';
export const SET_ADS_AD = 'SET_ADS_AD';
export const SET_ADS_FAVORITES = 'SET_ADS_FAVORITES';

export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_PAGE = 'SET_PAGE';
export const DIV_PAGE = 'DIV_PAGE';

const setAdsAds = ads => ({
  type: SET_ADS_ADS,
  ads,
});

const setAdsAd = ad => ({
  type: SET_ADS_AD,
  ad,
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

const setPage = page => ({
  type: SET_PAGE,
  page,
});

const divPage = () => ({
  type: DIV_PAGE,
});

//API REDUX
export const getAds = filters => dispatch => {
  dispatch(setLoading(true, true));

  var requestString = `${ADS}ads/?`;

  if (filters !== undefined) {
    //seller_type
    if (filters.typeOfAd !== undefined && filters.typeOfAd !== null) {
      requestString += `&seller_type=${filters.typeOfAd}`;
    }
    //state
    if (
      filters.stateOfProduct !== undefined &&
      filters.stateOfProduct !== null
    ) {
      requestString += `&state=${filters.stateOfProduct}`;
    } //q
    if (filters.query !== undefined && filters.query !== null) {
      requestString += `&q=${filters.query}`;
    } //price_min
    if (filters.minPrice !== undefined && filters.minPrice !== null) {
      requestString += `&price_min=${parseInt(filters.minPrice)}`;
    } //price_max
    if (filters.maxPrice !== undefined && filters.maxPrice !== null) {
      requestString += `&price_max=${parseInt(filters.maxPrice)}`;
    } //city
    if (filters.city !== undefined && filters.city !== null) {
      requestString += `&city=${filters.city}`;
    } //category
    if (filters.category !== undefined && filters.category !== null) {
      requestString += `&category=${filters.category}`;
    }
  }

  console.log('URL', requestString);

  fetch(requestString, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setAdsAds(responseJson));

      if (responseJson.next !== null) {
        const getPage = responseJson.next.match(/offset=(\d+)/);
        if (getPage !== null) {
          dispatch(setPage(getPage[1] / 15));
        }
      }
      dispatch(setLoading(false, true));
    })
    .catch(error => {
      dispatch(setError(error));
    });
};

export const getNextAds = url => dispatch => {
  const getPage = url.match(/offset=(\d+)/);
  if (getPage !== null) {
    const page = (parseInt(getPage[1]) + 15) / 15;

    dispatch(setPage(page));
  }

  fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setAdsAds(responseJson));
    })
    .catch(error => {
      dispatch(setError(error));
    });
};

export const getPreviousAds = url => dispatch => {
  dispatch(divPage());

  fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      dispatch(setAdsAds(responseJson));
    })
    .catch(error => {
      dispatch(setError(error));
    });
};

export const getAd = (productId, token) => dispatch => {
  dispatch(setLoading(false, true));

  let head = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token !== null) {
    head = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    };
  }

  fetch(`${ADS}ad/${productId}`, head)
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
