// import {
//     LOGIN_START,
//     LOGIN_SUCCESS,
//     // LOGIN_FAILURE,
//     FETCH_AVAILABLEPICKUPS_START,
//     FETCH_AVAILABLEPICKUPS_SUCCESS,
//     FETCH_AVAILABLEPICKUPS_FAILURE
// } from '../actions'

// const initialState = {
//     availablePickups: [],
//     getAvailablePickups: false,
//     error: null,
// }

// export const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOGIN_START:
//         return {
//             ...state,
//             error: '',
//             errorStatusCode: null,
//             fetchingData: false,
//             loggingIn: true
//         }
//         case LOGIN_SUCCESS: 
//         return {
//             ...state,
//             error: '',
//             loggingIn: false
//         }
//         case FETCH_AVAILABLEPICKUPS_START:
//         return {
//             ...state,
//             error: '',
//             getAvailablePickups: true
//         }
//         case FETCH_AVAILABLEPICKUPS_SUCCESS:
//         return {
//             ...state,
//             error: '',
//             getAvailablePickups: false,
//             availablePickups: action.payload
//         }
//         case FETCH_AVAILABLEPICKUPS_FAILURE:
//         return {
//             ...state,
//             error: action.payload.data.error,
//             errorStatusCode: action.payload.data.status,
//             fetchingData: false,
//         }
//         default:
//             return state
//     }

// }