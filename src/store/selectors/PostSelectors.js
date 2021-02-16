import { createSelector } from "reselect";
import { selectUserId } from "./UserSelectors";


export const selectAllPost = (state) => {
    return state.posts.list;
};

export const selectUserPost = createSelector(
    selectAllPost,
    selectUserId,
    (posts, currentUserId) => posts.filter(post => post.authorID === currentUserId)
);

export const selectPostById = (state, postId) => {
    return state.posts.list.find(post => post.postID === postId);
};
