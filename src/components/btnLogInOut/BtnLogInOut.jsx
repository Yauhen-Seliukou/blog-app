import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import { logout } from "../../store/actions/loginAction";
import { Button } from "react-bootstrap";

const BtnLogInOut = ({userName}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        if(userName) {
            dispatch(logout());
            history.push('/');
        } else {
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