import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import BtnLogInOut from "../BtnLogInOut";
import InfoUser from "../InfoUser";
import './Header.scss';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">BLOG-APP</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <InfoUser />
            <BtnLogInOut />
        </Navbar>
    );
}

export default Header;