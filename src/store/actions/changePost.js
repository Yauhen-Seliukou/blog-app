import CHANGE_POST from "../consts/CHANGE_POST";

function changePost(post) {
    return {
        type: CHANGE_POST,
        payload: post
    }
}

export default changePost;