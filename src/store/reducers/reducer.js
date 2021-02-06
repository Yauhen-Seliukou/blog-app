import { combineReducers } from 'redux';
import getUser from "./getUser";
import getPosts from "./getPosts";

const reducer = combineReducers({
    authorizationData: getUser,
    posts: getPosts
});

export default reducer;