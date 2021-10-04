import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"




const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand className="text-white">Sun Shine</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 nav-style px-4"
                        style={{ maxHeight: '100px' }}
                        navbarScroll>
                        <NavLink to="/home" className="nav-style"> Home </NavLink>
                        <NavLink to="/about" className="nav-style"> About Us </NavLink>
                        <NavLink to="/services" className="nav-style"> Services </NavLink>
                        <NavLink to="/contact" className="nav-style"> Contact Us </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};



export default Header;
