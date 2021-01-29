import FETCH_SUCCESS_REQUEST from "../consts/FETCH_SUCCESS_REQUEST";

function fetchSuccessRequest(user, posts) {
    return {
        type: FETCH_SUCCESS_REQUEST,
        payload: {
            user: user,
            posts: posts
        }
    }
}

export default fetchSuccessRequest;