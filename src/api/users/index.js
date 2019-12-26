import { DEFAULT_SERVER } from '../../config';

const GET_CITIES = `${DEFAULT_SERVER}/common/cities/`;
const CHANGE_PASSWORD = `${DEFAULT_SERVER}/users/change-password/`;

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

export const changePassword = async (data, token) => {
  return fetch(`${CHANGE_PASSWORD}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      old_password: data.old_password,
      new_password: data.new_password,
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.msg === 'Your password updated.') {
        return { error: false, msg: 'Success' };
      } else {
        return { error: true, msg: responseJson };
      }
    })
    .catch(error => console.log(error));
};
