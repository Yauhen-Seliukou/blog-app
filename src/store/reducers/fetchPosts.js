import {
    postsQuoteRequest,
    postsSuccessRequest 
} from "../actions/postsActions";

import posts from "../../mocks/posts";

const fetchPosts = () => (dispatch) => { 
    dispatch(postsQuoteRequest());
    setTimeout(() => {
        dispatch(postsSuccessRequest(posts));
    }, 1000);
}

export default fetchPosts;