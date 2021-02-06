import POSTS_FAIL_REQUEST from "../consts/POSTS_FAIL_REQUEST";
import POSTS_QUOTE_REQUEST from "../consts/POSTS_QUOTE_REQUEST";
import POSTS_SUCCESS_REQUEST from "../consts/POSTS_SUCCESS_REQUEST";
import CHANGE_POST from "../consts/CHANGE_POST";
import SAVE_NEW_POST from "../consts/SAVE_NEW_POST";
import DELETE_POST from "../consts/DELETE_POST";

const initialState = {
    error: '',
    list: ''
};

function getPosts(state = initialState, action) {
    switch (action.type) {
        case POSTS_FAIL_REQUEST: 
            return {
                ...state, 
                error: action.error, 
                list: []
            };
        case POSTS_SUCCESS_REQUEST: 
            return {
                ...state, 
                list: action.payload, 
            };
        case POSTS_QUOTE_REQUEST: 
            return {
                ...state, 
                list: [], 
                error: '', 
            };
        case CHANGE_POST: 
            return {
                ...state,  
                list: [...state.list.filter(post => post.postID !== action.payload.postID), action.payload]
            };
        case SAVE_NEW_POST:
            return {
                ...state,  
                list: [...state.list, action.payload]
            };
        case DELETE_POST:
            return {
                ...state,  
                list: [...state.list.filter(post => post.postID !== action.payload)]
            };
        default:
            return state;
    }
}

export default getPosts;