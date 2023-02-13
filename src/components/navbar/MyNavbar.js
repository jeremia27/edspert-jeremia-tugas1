import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant='dark' style={{ height: 70 }}>
        <Navbar.Brand href="#home" style={{ marginLeft: '20px' }}>Bootcamp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: '90px' }}>
          <Nav className="ml-auto w-100">
            <Nav.Link href="#home" style={{ marginRight: '10px' }}>Home</Nav.Link>
            <Nav.Link href="#about" style={{ marginRight: '10px' }}>About Us</Nav.Link>
            <Nav.Link href="#contact" style={{ marginRight: '10px' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
