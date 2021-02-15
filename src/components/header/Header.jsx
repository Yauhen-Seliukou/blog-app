import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import BtnLogInOut from "../BtnLogInOut/BtnLogInOut";
import InfoUser from "../UserInfo/UserInfo";
import { selectUserName } from "../../store/selectors/UserSelectors";

import './Header.scss';

function Header() {
    const userName = useSelector(selectUserName);
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <Navbar bg="dark" variant="dark">
        <NavbarBrand className="logo" onClick={handleClick}>BLOG-APP</NavbarBrand>
        <Nav className="mr-auto"></Nav>
            <InfoUser userName={userName} />
            <BtnLogInOut userName={userName} />
        </Navbar>
    );
}

export default Header;