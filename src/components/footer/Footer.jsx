import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.scss'

function Footer() {
    return (
        <Nav className="justify-content-center">
            <Nav.Item>
                &copy; 2020 BLOG-APP &reg; All rights reserved.
            </Nav.Item>
        </Nav>
    );
}

export default Footer;