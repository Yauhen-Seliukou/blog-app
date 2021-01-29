import FETCH_FAIL_REQUEST from "../consts/FETCH_FAIL_REQUEST";
import FETCH_QUOTE_REQUEST from "../consts/FETCH_QUOTE_REQUEST";
import FETCH_SUCCESS_REQUEST from "../consts/FETCH_SUCCESS_REQUEST";
import LOG_OUT from "../consts/LOG_OUT";
import LOG_IN from "../consts/LOG_IN";

const initialState = {
    error: '',
    user: '',
    posts: '',
    page: '/',
    isLogin: false,
    textBtn: 'LOGIN'
};

function dataAPI(state = initialState, action) {
    switch (action.type) {
        case FETCH_FAIL_REQUEST: 
            return {...state, error: action.error, page: '/login', isLogin: false, textBtn: 'LOGIN'};
        case FETCH_SUCCESS_REQUEST: 
            return {...state, user: action.payload.user, posts: action.payload.posts, page: '/home', isLogin: true, textBtn: 'LOGOUT'};
        case FETCH_QUOTE_REQUEST: 
            return {...state, user: '', posts: '', error: '', page: '/login', isLogin: false, textBtn: 'LOGIN'};
        case LOG_OUT: 
            return {...state, user: '', posts: '', error: '', page: '/', isLogin: false, textBtn: 'LOGIN'};
        case LOG_IN: 
            return {...state, user: '', posts: '', error: '', page: '/login', isLogin: false, textBtn: 'LOGIN'};
        default:
            return state;
    }
}

export default dataAPI;