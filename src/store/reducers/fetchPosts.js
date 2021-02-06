import postsFailRequest from "../actions/postsFailRequest";
import postsQuoteRequest from "../actions/postsQuoteRequest";
import postsSuccessRequest from "../actions/postsSuccessRequest";
import loginSuccessRequest from "../actions/loginSuccessRequest";
import posts from "../../mocks/posts";

const fetchPosts = () => (dispatch) => { 
    dispatch(postsQuoteRequest());
    setTimeout(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            const localPosts = JSON.parse(localStorage.getItem('posts')).postsUser;
            dispatch(loginSuccessRequest(user));
            dispatch(postsSuccessRequest(localPosts));
        } else {
            dispatch(postsSuccessRequest(posts));
        }
    }, 1000);
}

export default fetchPosts;