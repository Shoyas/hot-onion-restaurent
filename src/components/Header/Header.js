import React from 'react';
import { Navbar } from 'react-bootstrap';
import {logo2} from './logo2.png';

const Header = () => {
    return (
        <div className="container">
            <Navbar>
                <Navbar.Brand href="#home">
                    <img src={logo2} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;