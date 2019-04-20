import axios from 'axios'

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = credentials => dispatch => {
    dispatch({ type: REGISTER_START })
    return axios
    .post('https://replate-backend-turcan.herokuapp.com/api/users', credentials)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('type', res.data.user.type)
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}