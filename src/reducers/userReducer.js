import userActionTypes from "../types/userType"

const initialState = {
    token : "",
    error: null,
    isFetching: false,
    lastFetchedAt : 0
}

export default function userReducer ( state = initialState, action) {
    const{error, payload, type} = action
    switch(type) {
        case userActionTypes.AUTH_FAILURE: {
            return {
                ...state,
                    error,
                    isFetching : false,
                    token : ""
            }
        }

        case userActionTypes.AUTH_START: {
            return {
                ...state,
                isFetching : true,
                token : "",
                error: null
            }
        }

        case userActionTypes.AUTH_UPDATE: {
            return {
                ...state,
                    token : payload,
                    error : null,
                    isFetching : false,
                    lastFetchedAt : Date.now()
            }
        }

        case userActionTypes.AUTH_LOGOUT: {
            return initialState
        }

        default:{
            return state
        }
    }
}