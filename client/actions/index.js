import axios from 'axios';
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, NO_TOKEN } from '../type/type';
const url = '/api/v1/users'

const setTokenToAxios = (token) => {
  const newToken = localStorage.getItem('authToken') || '';
  axios.defaults.headers.Authorization = newToken;
}

export const userSignUp = (data, history) => {
  console.log(data)
  return function (dispatch) {
    axios.post(`${url}`, { user: data }).then(res => {
      history.push('/login')
    }).catch(err => console.log(err))
  }
}

export const userLogin = (data, history) => {
  return function (dispatch) {
    axios.post(`${url}/login`, { user: data }).then(user => {
      console.log(user, "user is here");
      return (dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: user.data
      }),
        localStorage.setItem('token', user.data.token),
        history.push('/'))
    })
  }
}


export const getCurrentUser = () => {
  return (dispatch => {
    axios.get(`${url}/users`)
      .then(res => {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          data: res.data
        })
      })
      .catch(err => {
        dispatch({ type: USER_LOGIN_FAILED })
      })
  })
}

export const noToken = () => {
  return (dispatch => {
    dispatch({
      type: NO_TOKEN
    })
  })
}