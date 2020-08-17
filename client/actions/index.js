import axios from 'axios';
// import { response } from 'express';

const rootUrl = 'http://localhost:3000/api/v1';

const setTokenToAxios = (token) => {
  const newToken = localStorage.getItem('authToken') || '';
  axios.defaults.headers.Authorization = newToken;
}

export const userSignUp = (data) => {
  console.log(data, "data is here ")
  try {
    axios.post(`${rootUrl}/users`, data)
      .then(res => console.log(res, 'response is here'))
  } catch (error) {
    console.log(error)
  }
}


// export const getCurrentUser = () => {
//   return (dispatch => {
//     axios.get(`${rootUrl}/users/me`)
//     .then(res => {
//       dispatch({
//         type: 'USER_LOGIN_SUCCESS',
//         data: res.data
//       })
//     })
//     .catch(err => {
//       dispatch({type: 'USER_LOGIN_FAILED'})
//     })
//   })
// }

export const noToken = () => {
  return (dispatch => {
    dispatch({
      type: 'NO_TOKEN'
    })
  })
}