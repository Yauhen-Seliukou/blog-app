import FETCH_QUOTE_REQUEST from "../consts/FETCH_QUOTE_REQUEST";

function fetchQuoteRequest() {
    return {
        type: FETCH_QUOTE_REQUEST
    }
}

export default fetchQuoteRequest;