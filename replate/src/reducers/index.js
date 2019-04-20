import {
    LOGIN_START,
    LOGIN_SUCCESS,
    // LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    // REGISTER_FAILURE,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    REGISTER_FAILURE
} from '../actions/'

const initialState = {
    email: '',
    password: '',
    availablePickups: [],
    fetchingData: false,
    error: null,
    type: '',
    id: '',
    isRegistering: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        return {
            ...state,
            error: '',
            errorStatusCode: null,
            fetchingData: false,
            loggingIn: true
        }
        case LOGIN_SUCCESS: 
        return {
            ...state,
            error: '',
            loggingIn: false
        }
        case REGISTER_START:
        return {
            ...state,
            error: '',
            fetchingData: false,
            isRegistering: true,
            type: '',

        }
        case REGISTER_SUCCESS:
        return {
            ...state,
            error: '',
            isRegistering: false,
            fetchingData: true
        }
        case REGISTER_FAILURE:
        return {
            ...state,
            error: action.error.response.data.msg,
            isRegistering: false,
            fetchingData: false
        }
        case FETCH_DATA_START:
        return {
            ...state,
            error: '',
            fetchingData: true
        }
        case FETCH_DATA_SUCCESS:
        return {
            ...state,
            error: '',
            fetchingData: false,
            getData: action.payload
        }
        case FETCH_DATA_FAILURE:
        return {
            ...state,
            error: action.payload.data.error,
            errorStatusCode: action.payload.data.status,
            fetchingData: false,
        }
        default:
            return state
    }

}