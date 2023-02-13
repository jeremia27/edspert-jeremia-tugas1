import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function MyFooter() {
  return (
    <Navbar bg="light" variant="light" className="mt-5 justify-content-center" style={{ height: 100 }}>
      <Navbar.Text>
        &copy;Jeremia React-Bootstrap Blog 2023
      </Navbar.Text>
    </Navbar>
  );
}
