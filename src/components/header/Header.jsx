import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import BtnLogInOut from "../btnLogInOut/BtnLogInOut";
import InfoUser from "../infoUser/InfoUser";
import './Header.scss';

function Header() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/');
    }

    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="logo" onClick={handleClick}>BLOG-APP</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <InfoUser />
            <BtnLogInOut />
        </Navbar>
    );
}

export default Header;