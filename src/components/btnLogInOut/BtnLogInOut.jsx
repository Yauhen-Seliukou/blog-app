import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import { Button } from "react-bootstrap";
import { logout, login } from "../../store/actions/loginAction";

const BtnLogInOut = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = props.userName;

    const handleClick = () => {
        if(userName) {
            dispatch(logout());
            history.push('/');
        } else {
            dispatch(login());
            history.push('/login');
        }
    }
    
    return (
        <Button variant="primary" onClick={handleClick}>
            {userName ? 'LOGOUT' : 'LOGIN'}
        </Button>
    );
}

export default BtnLogInOut;