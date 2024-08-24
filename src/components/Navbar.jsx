import React, { useState } from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavigationBar({ theme, toggleTheme }) {
  const [expanded, setExpanded] = useState(false);

  return (
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
          <Form.Check 
            type="switch"
            id="theme-switch"
            label={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            onChange={toggleTheme}
            checked={theme === 'dark'}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
