import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.scss'

function Footer() {
    return (
        <Navbar bg="dark" variant="dark">
            <div className="footer-info">
                <Nav.Item className="justify-content-center">
                    &copy; 2020 BLOG-APP &reg; All rights reserved.
                </Nav.Item>
            </div>
        </Navbar>
    );
}

export default Footer;