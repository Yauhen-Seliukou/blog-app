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
            const { 
                name, 
                lastName, 
                email, 
                id 
            } = dataUser[0];
            const user = {
                name,
                lastName, 
                email, 
                id 
            }
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('posts', JSON.stringify({ postsUser }));
            dispatch(fetchSuccessRequest(dataUser[0], postsUser));
        } else {
            dispatch(fetchFailRequest('Not found your data'));
        }
        
    }, 1000);
}

export default fetchQuote;