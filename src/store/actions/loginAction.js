import { 
    FETCH_LOGIN_SUCCESS, 
    FETCH_LOGIN_FAIL,
    FETCH_LOGIN_REQUEST,
    LOG_OUT
} from "../constans";


export const fetchLoginSuccess = (user) => {
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: user
    }
}

export const fetchLoginFail = (textError) => {
    return {
        type: FETCH_LOGIN_FAIL,
        error: textError
    }
}

export const fetchLoginRequest = () => {
    return {
        type: FETCH_LOGIN_REQUEST
    }
}

export const logout = () => {
    return {
        type: LOG_OUT
    }
}