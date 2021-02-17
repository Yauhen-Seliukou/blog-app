import React from 'react';
import { Navbar } from 'react-bootstrap';

import './Footer.scss'

function Footer() {
    return (
        <Navbar bg="dark" variant="dark">
            <div className="footer-info">
                &copy; 2020 BLOG-APP &reg; All rights reserved.
            </div>
        </Navbar>
    );
}

export default Footer;