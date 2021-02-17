import { 
    FETCH_POST_FAIL,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    CHANGE_POST,
    SAVE_NEW_POST,
    DELETE_POST 
} from "../constans";
import { setDataToLocalStorage } from "../../services/commandForLocalStorage";

let posts = [];
const initialState = {
    status: 'initial',
    error: '',
    list: []
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_FAIL: 
            return {
                ...state, 
                status: 'fail',
                error: action.error, 
                list: []
            };
        
        case FETCH_POST_SUCCESS: 
            posts = action.payload;
            setDataToLocalStorage('posts', posts);
            return {
                ...state, 
                status: 'success',
                list: posts, 
            };
        
        case FETCH_POST_REQUEST: 
            return {
                ...state, 
                status: 'request',
                list: [], 
                error: '', 
            };
        
        case CHANGE_POST: 
            posts = [...state.list.filter(post => post.postID !== action.payload.postID), action.payload];
            setDataToLocalStorage('posts', posts);
            return {
                ...state,  
                list: posts
            };
        
        case SAVE_NEW_POST:
            posts = [...state.list, action.payload];
            setDataToLocalStorage('posts', posts);
            return {
                ...state,  
                list: posts
            };
        
        case DELETE_POST:
            posts = [...state.list.filter(post => post.postID !== action.payload)];
            setDataToLocalStorage('posts', posts);
            return {
                ...state,  
                list: posts
            };
        
        default:
            return state;
    }
}

export default postReducer;