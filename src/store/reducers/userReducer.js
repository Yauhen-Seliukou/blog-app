import {
    LOGIN_FAIL_REQUEST,
    LOGIN_QUOTE_REQUEST,
    LOGIN_SUCCESS_REQUEST,
    LOG_OUT,
    LOG_IN 
} from "../constans";

const initialState = {
    error: '',
    user: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FAIL_REQUEST: 
            return {
                ...state, 
                error: action.error
        };
        
        case LOGIN_SUCCESS_REQUEST: 
            return {
                ...state, 
                user: action.payload
            };
        
        case LOGIN_QUOTE_REQUEST: 
            return {
                ...state, 
                user: null, 
                error: ''
            };
        
        case LOG_OUT:
            localStorage.setItem('user', null); 
            return {
                ...state, 
                user: null, 
                error: ''
            };
       
        case LOG_IN: 
            return {
                ...state, 
                error: ''
            };
        
        default:
            return state;
    }
}

export default userReducer;