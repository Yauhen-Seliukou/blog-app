import {
    postsQuoteRequest,
    postsSuccessRequest 
} from "../actions/postsActions";

import posts from "../../mocks/posts";

const fetchPosts = () => (dispatch) => { 
    dispatch(postsQuoteRequest());
    setTimeout(() => {
        const postFromLocalStorage = JSON.parse(localStorage.getItem('posts'))?.posts || [];
        dispatch(postsSuccessRequest(postFromLocalStorage.length ? postFromLocalStorage : posts));
    }, 1000);
}

export default fetchPosts;