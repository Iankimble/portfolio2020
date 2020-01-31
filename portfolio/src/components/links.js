import React from "react"

import {
  Navbar,
  Form,
  FormControl,
  Button,
  Nav,
  NavDropdown,
} from "react-bootstrap"
const links = () => (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        Ian Kimble | MERN Stack Developer
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Github</Nav.Link>
          <Nav.Link href="#link">LinkedIn</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default links
