import { 
    CHANGE_POST, 
    DELETE_POST, 
    SAVE_NEW_POST, 
    POSTS_FAIL_REQUEST, 
    POSTS_QUOTE_REQUEST, 
    POSTS_SUCCESS_REQUEST
} from "../constans";



export const changePost = (post) => {
    return {
        type: CHANGE_POST,
        payload: post
    }
}

export const deletePost = (postID) => {
    return {
        type: DELETE_POST,
        payload: postID
    }
}

export const saveNewPost = (post) => {
    return {
        type: SAVE_NEW_POST,
        payload: post
    }
}

export const postsFailRequest = (error) => {
    return {
        type: POSTS_FAIL_REQUEST,
        payload: error
    }
}

export const postsQuoteRequest = () => {
    return {
        type: POSTS_QUOTE_REQUEST
    }
}

export const postsSuccessRequest = (posts) => {
    return {
        type: POSTS_SUCCESS_REQUEST,
        payload: posts
    }
}