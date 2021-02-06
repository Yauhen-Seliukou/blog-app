import POSTS_SUCCESS_REQUEST from "../consts/POSTS_SUCCESS_REQUEST";

function postsSuccessRequest(posts) {
    return {
        type: POSTS_SUCCESS_REQUEST,
        payload: posts
    }
}

export default postsSuccessRequest;