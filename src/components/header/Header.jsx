import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import BtnLogInOut from "../BtnLogInOut";
import InfoUser from "../InfoUser";
import './Header.scss';

function Header() {
    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">BLOG-APP</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <InfoUser />
            <BtnLogInOut />
        </Navbar>
    );
}

export default Header;