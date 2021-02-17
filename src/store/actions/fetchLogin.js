import { 
    fetchLoginFail, 
    fetchLoginRequest, 
    fetchLoginSuccess 
} from "./loginAction";
import { setDataToLocalStorage } from "../../services/commandForLocalStorage";
import users from "../../mocks/users";

const fetchLogin = ({ email, password }) => (dispatch) => { 
    dispatch(fetchLoginRequest());
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
            setDataToLocalStorage('user', user);
            dispatch(fetchLoginSuccess(user));
        } else {
            dispatch(fetchLoginFail('Not found your data'));
        }
        
    }, 1000);
}

export default fetchLogin;