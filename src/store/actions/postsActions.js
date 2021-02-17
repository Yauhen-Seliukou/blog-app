import { 
    CHANGE_POST, 
    DELETE_POST, 
    SAVE_NEW_POST, 
    FETCH_POST_FAIL, 
    FETCH_POST_REQUEST, 
    FETCH_POST_SUCCESS
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

export const fetchPostsFail = (error) => {
    return {
        type: FETCH_POST_FAIL,
        payload: error
    }
}

export const fetchPostsRequest = () => {
    return {
        type: FETCH_POST_REQUEST
    }
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: posts
    }
}