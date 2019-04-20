import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_AVAILABLEPICKUPS_START'
export const FETCH_DATA_SUCCESS = 'FETCH_AVAILABLEPICKUPS_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_AVAILABLEPICKUPS_FAILURE'
export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START })
    axios
        .get('https://replate-backend-turcan.herokuapp.com/api/data', {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            dispatch({ FETCH_DATA_SUCCESS, payload: res.data.getData })
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.response})
        })
}
