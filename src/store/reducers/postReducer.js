import { 
    POSTS_FAIL_REQUEST,
    POSTS_QUOTE_REQUEST,
    POSTS_SUCCESS_REQUEST,
    CHANGE_POST,
    SAVE_NEW_POST,
    DELETE_POST 
} from "../constans";

const initialState = {
    error: '',
    list: []
};

const postReducer = (state = initialState, action) => {
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

export default postReducer;