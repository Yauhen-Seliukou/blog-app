import { 
    LOGIN_SUCCESS_REQUEST, 
    LOGIN_FAIL_REQUEST,
    LOGIN_QUOTE_REQUEST,
    LOG_IN,
    LOG_OUT
} from "../constans";


export const loginSuccessRequest = (user) => {
    return {
        type: LOGIN_SUCCESS_REQUEST,
        payload: user
    }
}

export const loginFailRequest = (textError) => {
    return {
        type: LOGIN_FAIL_REQUEST,
        error: textError
    }
}

export const loginQuoteRequest = () => {
    return {
        type: LOGIN_QUOTE_REQUEST
    }
}

export const login = () => {
    return {
        type: LOG_IN
    }
}

export const logout = () => {
    return {
        type: LOG_OUT
    }
}