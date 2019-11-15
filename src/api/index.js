const GET_CATEGORY = 'https://staging.masaha.app/api/v1/ads/categories/';
const GET_ADS = 'https://staging.masaha.app/api/v1/ads/ads/';
const GET_CATEGORIES_COUNT =
  'https://staging.masaha.app/api/v1/common/living-in-kuwait/';

export async function get_category() {
  return fetch(`${GET_CATEGORY}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.results; //responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}
export async function get_ads() {
  return fetch(`${GET_ADS}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.results; //responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}
export async function get_categories_count() {
  return fetch(`${GET_CATEGORIES_COUNT}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson; //responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}
