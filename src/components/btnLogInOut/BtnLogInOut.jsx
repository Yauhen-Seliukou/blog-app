import { useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { Button } from "react-bootstrap";
import logout from "../../store/actions/logout";
import login from "../../store/actions/login";
import { getDataAuthorization } from "../../store/selectors/getDataAuthorization";

function BtnLogInOut() {
    const { textBtn, page } = useSelector(state => getDataAuthorization(state));
    const dispatch = useDispatch();
    const history = useHistory();
    history.push(page);
    
    const handleClick = () => {
        textBtn === 'LOGOUT' ? dispatch(logout()) : dispatch(login());
    }
    
    return (
        <Button variant="primary" onClick={handleClick}>
            {textBtn}
        </Button>
    );
}

export default BtnLogInOut;