
import axiosWithAuth from '../utils/axiosAuth'

export const FETCH_AVAILABLEPICKUPS_START = 'FETCH_AVAILABLEPICKUPS_START'
export const FETCH_AVAILABLEPICKUPS_SUCCESS = 'FETCH_AVAILABLEPICKUPS_SUCCESS'
export const FETCH_AVAILABLEPICKUPS_FAILURE = 'FETCH_AVAILABLEPICKUPS_FAILURE'
export const getData = () => dispatch => {
    dispatch({ type: FETCH_AVAILABLEPICKUPS_START })
    axiosWithAuth()
        .get('https://replate-backend-turcan.herokuapp.com/api/data')
        .then(res => {
            dispatch({ FETCH_AVAILABLEPICKUPS_SUCCESS, payload: res.data.getData })
        })
        .catch(err => {
            dispatch({ type: FETCH_AVAILABLEPICKUPS_FAILURE, payload: err.response})
        })
}
