const USERS = 'https://staging.masaha.app/api/v1/users/';

/**
 * API request to server. Returned msg.
 * but need return users
 */

export const signUp = async data => {
  return fetch(`${USERS}signup/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      full_name: data.full_name,
      phone_number: data.phone_number,
    }),
  })
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.msg === 'Please confirm your email.') {
        return { type: 'success', msg: responseJson.msg };
      }
      return { type: 'error', msg: responseJson };
    })
    .catch(error => {
      return { type: 'error', msg: error };
    });
};
