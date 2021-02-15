import { 
    loginFailRequest, 
    loginQuoteRequest, 
    loginSuccessRequest 
} from "../actions/loginAction";

import users from "../../mocks/users";

const fetchLogin = ({ email, password }) => (dispatch) => { 
    dispatch(loginQuoteRequest());
    setTimeout(() => {
        const dataUser = users.filter((user) => user.email === email && user.password === password);
        if (dataUser.length) {
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
            dispatch(loginSuccessRequest(dataUser[0]));
        } else {
            dispatch(loginFailRequest('Not found your data'));
        }
        
    }, 1000);
}

export default fetchLogin;