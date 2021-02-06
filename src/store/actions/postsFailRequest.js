import POSTS_FAIL_REQUEST from "../consts/POSTS_FAIL_REQUEST";

function postsFailRequest(error) {
    return {
        type: POSTS_FAIL_REQUEST,
        payload: error
    }
}

export default postsFailRequest;