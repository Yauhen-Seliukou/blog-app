import DELETE_POST from "../consts/DELETE_POST";

function deletePost(postID) {
    return {
        type: DELETE_POST,
        payload: postID
    }
}

export default deletePost;