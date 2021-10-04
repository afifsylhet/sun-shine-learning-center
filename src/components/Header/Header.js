import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="nav-style">Sun Shine</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#teachers">Teacher's</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>

                            <Button variant="outline-light" className="ms-5">Sign In</Button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;