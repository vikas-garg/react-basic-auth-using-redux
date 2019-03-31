import userActionTypes from '../../types/userType'


/**
 * 
 * @param {object} error - the error thrown
 */
export const errorUSERFetch = (error) => ({
    type: userActionTypes.AUTH_FAILURE,
    error
})

/**
 * 
 */
export const startUSERFetch = () => ({
    type : userActionTypes.AUTH_START
})


/**
 * 
 *  @param {object} payload
 */
export const updateUSERFetch = (payload) => ({
    type: userActionTypes.AUTH_UPDATE,
    payload
})


export const updateLOGOUT = () => ({
    type: userActionTypes.AUTH_LOGOUT
})