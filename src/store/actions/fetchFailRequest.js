import FETCH_FAIL_REQUEST from "../consts/FETCH_FAIL_REQUEST";

function fetchFailRequest(textError) {
    return {
        type: FETCH_FAIL_REQUEST,
        error: textError
    }
}

export default fetchFailRequest;