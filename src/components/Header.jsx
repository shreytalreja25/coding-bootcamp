import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import AuthModal from './AuthModal';  // Importing the modal component
import { Link, useNavigate } from 'react-router-dom'; // Importing useNavigate from react-router-dom

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate(); // React Router v6's useNavigate hook for navigation

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Conditional rendering for Login/Register or Profile buttons based on login state
  const isAuthenticated = false;  // This should be dynamic in a real scenario

  // Function to handle navigation to the dashboard after login
  const handleProfileNavigation = () => {
    navigate('/dashboard');
  };

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

              {/* Conditional Login/Register or Profile Button */}
              {!isAuthenticated ? (
                <Button variant="outline-light" onClick={handleShow} className="ms-3">
                  Login/Register
                </Button>
              ) : (
                <Button variant="outline-light" className="ms-3" onClick={handleProfileNavigation}>
                  Profile
                </Button>
              )}

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
