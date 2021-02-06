import LOGIN_SUCCESS_REQUEST from "../consts/LOGIN_SUCCESS_REQUEST";

function loginSuccessRequest(user) {
    return {
        type: LOGIN_SUCCESS_REQUEST,
        payload: user
    }
}

export default loginSuccessRequest;