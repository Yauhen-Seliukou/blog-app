import { useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { Button } from "react-bootstrap";
import logout from "../store/actions/logout";
import login from "../store/actions/login";

function BtnLogInOut() {
    const textBtn = useSelector(state => state.dataUser.textBtn);
    const page = useSelector(state => state.dataUser.page);
    const history = useHistory();
    const dispatch = useDispatch();
    function handleClick() {
        if (textBtn === 'LOGOUT') {
            dispatch(logout());
            localStorage.clear();
        } else dispatch(login());
    }
    history.push(page);

    return (
        <Button variant="outline-primary" onClick={handleClick}>
            {textBtn}
        </Button>
    );
}

export default BtnLogInOut;