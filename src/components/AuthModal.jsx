import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext'; // Use authentication context
import Confetti from 'react-confetti';

const AuthModal = ({ show, handleClose }) => {
  const { theme } = useContext(ThemeContext);
  const [key, setKey] = useState('login');
  const [confettiActive, setConfettiActive] = useState(false);
  const navigate = useNavigate(); // For navigation
  const { login } = useAuth(); // Use login from AuthContext

  // Handle login and redirect to dashboard
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 5000);  // Optional confetti effect

    // Simulate login and update the auth context
    login({ displayName: 'John Doe' }); // Example user data
    handleClose();
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{key === 'login' ? 'Login' : 'Register'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {confettiActive && <Confetti />}
        <Tabs
          id="auth-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="login" title="Login">
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="register" title="Register">
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Create a password" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;
