import LOGIN_FAIL_REQUEST from "../consts/LOGIN_FAIL_REQUEST";

function loginFailRequest(textError) {
    return {
        type: LOGIN_FAIL_REQUEST,
        error: textError
    }
}

export default loginFailRequest;