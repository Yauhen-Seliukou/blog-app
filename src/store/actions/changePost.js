import CHANGE_POST from "../consts/CHANGE_POST";

function changePost(data) {
    return {
        type: CHANGE_POST,
        payload: data
    }
}

export default changePost;