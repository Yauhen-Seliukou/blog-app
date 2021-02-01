import SAVE_NEW_POST from "../consts/SAVE_NEW_POST";

function saveNewPost(post) {
    return {
        type: SAVE_NEW_POST,
        payload: post
    }
}

export default saveNewPost;