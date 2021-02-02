import ADD_USER_AND_POSTS_IN_STORE from "../consts/ADD_USER_AND_POSTS_IN_STORE";

function addUserAndPostsInStore (user, posts) {
    return {
        type: ADD_USER_AND_POSTS_IN_STORE,
        payload: {
            user: user,
            posts: posts
        }
    }
}

export default addUserAndPostsInStore;