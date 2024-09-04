import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import AuthModal from './AuthModal';  // Importing the modal component
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Navbar bg={theme === 'light' ? 'primary' : 'dark'} variant="dark" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span role="img" aria-label="rocket">🚀</span> CodeCraft Academy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="#courses">Courses</Nav.Link>
              <Nav.Link as={Link} to="#enrollment">Enrollment</Nav.Link>
              <Nav.Link as={Link} to="#about">About</Nav.Link>
              <Nav.Link as={Link} to="#contact">Contact</Nav.Link>

              {/* Login/Register Button */}
              <Button variant="outline-light" onClick={handleShow} className="ms-3">
                Login/Register
              </Button>

              {/* Profile Button */}
              <Nav.Link as={Link} to="/profile">
                <Button variant="outline-light" className="ms-3">Profile</Button>
              </Nav.Link>

              {/* Dark/Light Mode Toggle */}
              <Button
                variant={theme === 'light' ? 'outline-light' : 'outline-secondary'}
                onClick={toggleTheme}
                className="ms-3"
              >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal for Login/Register */}
      <AuthModal show={showModal} handleClose={handleClose} />
    </>
  );
}

export default Header;
