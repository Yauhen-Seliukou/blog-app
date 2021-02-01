import getAllPosts from "../actions/getAllPosts";
import posts from "../../mocks/posts";

const fetchAllPosts = () => (dispatch) => { 
    setTimeout(() => posts, 1000);
}

export default fetchAllPosts;