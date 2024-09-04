import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal'; // Importing the AuthModal component

export default function NavigationBar({ theme, toggleTheme }) {
  const [expanded, setExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Navbar bg={theme === 'light' ? 'primary' : 'dark'} variant={theme} expand="lg" expanded={expanded} fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Coding Bootcamp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link as={Link} to="/courses" onClick={() => setExpanded(false)}>Courses</Nav.Link>
              <Nav.Link as={Link} to="/enrollment" onClick={() => setExpanded(false)}>Enroll</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
              <Nav.Link as={Link} to="/blog" onClick={() => setExpanded(false)}>Blog</Nav.Link>
              <Nav.Link as={Link} to="/testimonials" onClick={() => setExpanded(false)}>Testimonials</Nav.Link>
            </Nav>

            {/* Theme toggle switch */}
            <Form.Check
              type="switch"
              id="theme-switch"
              label={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              onChange={toggleTheme}
              checked={theme === 'dark'}
              className="me-3"
            />

            {/* Login/Register Button */}
            <Button variant="outline-light" onClick={handleShow}>
              Login/Register
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* AuthModal Component */}
      <AuthModal show={showModal} handleClose={handleClose} />
    </>
  );
}
