import {
    fetchPostsRequest,
    fetchPostsSuccess 
} from "../actions/postsActions";
import { getDataFromLocalStorage } from "../../services/commandForLocalStorage";
import posts from "../../mocks/posts";

const fetchPosts = () => (dispatch) => { 
    dispatch(fetchPostsRequest());
    setTimeout(() => {
        dispatch(fetchPostsSuccess(getDataFromLocalStorage('posts') || posts));
    }, 1000);
}

export default fetchPosts;