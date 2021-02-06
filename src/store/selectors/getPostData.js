export const getAllPosts = (state) => {
    return state.posts.list;
};

export const getUserPosts = (state, userId) => {
    return state.posts.list.filter(post => post.authorID === userId);
};

export const getPostsId = (state, postId) => {
    return state.posts?.list.find(post => post.postID === postId);
};
