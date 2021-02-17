import {
    FETCH_LOGIN_FAIL,
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    LOG_OUT
} from "../constans";
import { setDataToLocalStorage } from "../../services/commandForLocalStorage";

const initialState = {
    error: '',
    user: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGIN_FAIL: 
            return {
                ...state, 
                error: action.error
        };
        
        case FETCH_LOGIN_SUCCESS: 
            return {
                ...state, 
                user: action.payload
            };
        
        case FETCH_LOGIN_REQUEST: 
            return {
                ...state, 
                user: null, 
                error: ''
            };
        
        case LOG_OUT:
            setDataToLocalStorage('user', null); 
            return {
                ...state, 
                user: null, 
                error: ''
            };

        default:
            return state;
    }
}

export default userReducer;