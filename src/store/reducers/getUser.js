import LOGIN_FAIL_REQUEST from "../consts/LOGIN_FAIL_REQUEST";
import LOGIN_QUOTE_REQUEST from "../consts/LOGIN_QUOTE_REQUEST";
import LOGIN_SUCCESS_REQUEST from "../consts/LOGIN_SUCCESS_REQUEST";
import LOG_OUT from "../consts/LOG_OUT";
import LOG_IN from "../consts/LOG_IN";

const initialState = {
    error: '',
    user: '',
    page: '/',
    isLogin: false,
    textBtn: 'LOGIN'
};

function getUser(state = initialState, action) {
    switch (action.type) {
        case LOGIN_FAIL_REQUEST: 
            return {
                ...state, 
                error: action.error, 
                page: '/login', 
                isLogin: false, 
                textBtn: 'LOGIN'
        };
        case LOGIN_SUCCESS_REQUEST: 
            return {
                ...state, 
                user: action.payload, 
                page: '/home', 
                isLogin: true, 
                textBtn: 'LOGOUT'
            };
        case LOGIN_QUOTE_REQUEST: 
            return {
                ...state, 
                user: '', 
                error: '', 
                page: '/login', 
                isLogin: false, 
                textBtn: 'LOGIN'
            };
        case LOG_OUT:
            localStorage.clear(); 
            return {
                ...state, 
                user: '', 
                error: '', 
                page: '/', 
                isLogin: false, 
                textBtn: 'LOGIN'
            };
        case LOG_IN: 
            return {
                ...state, 
                user: '',  
                error: '', 
                page: '/login', 
                isLogin: false, 
                textBtn: 'LOGIN'
            };
        default:
            return state;
    }
}

export default getUser;