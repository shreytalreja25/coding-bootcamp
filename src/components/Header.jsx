import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar bg={theme === 'light' ? 'primary' : 'dark'} variant="dark" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <span role="img" aria-label="rocket">🚀</span> CodeCraft Academy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#enrollment">Enrollment</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button variant={theme === 'light' ? 'outline-light' : 'outline-secondary'} onClick={toggleTheme} className="ms-3">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
