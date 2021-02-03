import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Col } from "react-bootstrap";
import BtnLogInOut from "../BtnLogInOut";
import InfoUser from "../InfoUser";
import WindowCreateOrChangeCard from "../WindowCreateOrChangeCard";
import './Header.scss';

function Header() {
    const [modalShow, setModalShow] = React.useState(false);
    const user = useSelector(state => state.dataUser.user);

    function onClickChange(e) {
        e.preventDefault();
        setModalShow(true);
    }

    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">BLOG-APP</Navbar.Brand>
            <Nav className="mr-auto">
                {user ? <Nav.Link href="#" onClick={onClickChange}>New post</Nav.Link> : ""}
            </Nav>
            <InfoUser />
            <BtnLogInOut />

            <WindowCreateOrChangeCard show={modalShow} onHide={() => setModalShow(false)}/>
        </Navbar>
    );
}

export default Header;