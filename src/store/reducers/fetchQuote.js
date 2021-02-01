import fetchFailRequest from "../actions/fetchFailRequest";
import fetchQuoteRequest from "../actions/fetchQuoteRequest";
import fetchSuccessRequest from "../actions/fetchSuccessRequest";
import users from "../../mocks/users";
import posts from "../../mocks/posts";

const fetchQuote = (email, password) => (dispatch) => { 
    dispatch(fetchQuoteRequest());
    setTimeout(() => {
        const dataUser = users.filter((user) => user.email === email && user.password === password);
        if (dataUser.length) {
            const postsUser = posts.filter((post) => dataUser[0].id === post.authorID);
            localStorage.setItem('user', JSON.stringify(dataUser[0]));
            localStorage.setItem('posts', JSON.stringify({posts: postsUser}));
            dispatch(fetchSuccessRequest(dataUser[0], postsUser));
        } else {
            dispatch(fetchFailRequest('Not found your data'));
        }
        
    }, 1000);
}

export default fetchQuote;