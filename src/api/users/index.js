import { DEFAULT_SERVER } from '../../config';

const GET_CITIES = `${DEFAULT_SERVER}/common/cities/`;

export const getCities = async () => {
  return fetch(`${GET_CITIES}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.results;
    })
    .catch(error => {
      console.error(error);
    });
};
