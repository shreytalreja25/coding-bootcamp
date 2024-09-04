import React, { useState, useContext } from 'react';
import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import Confetti from 'react-confetti';

const AuthModal = ({ show, handleClose }) => {
  const { theme } = useContext(ThemeContext); // Using theme from context
  const [key, setKey] = useState('login'); // State to manage tab selection
  const [confettiActive, setConfettiActive] = useState(false); // State to manage confetti visibility

  // Function to handle login or register
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setConfettiActive(true); // Trigger confetti on form submit
    setTimeout(() => setConfettiActive(false), 5000); // Stop confetti after 5 seconds
    handleClose(); // Close the modal after login/register
  };

  return (
    <>
      {confettiActive && <Confetti />} {/* Confetti component when active */}
      <Modal show={show} onHide={handleClose} centered className={theme === 'dark' ? 'modal-dark' : ''}>
        <Modal.Header closeButton className={theme === 'dark' ? 'bg-dark text-white' : ''}>
          <Modal.Title>{key === 'login' ? 'Login' : 'Register'} to Continue</Modal.Title>
        </Modal.Header>

        <Modal.Body className={theme === 'dark' ? 'bg-dark text-white' : ''}>
          <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
            <Tab eventKey="login" title="Login">
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter your username" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-3">Login</Button>
              </Form>
            </Tab>

            <Tab eventKey="register" title="Register">
              <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Create a password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-3">Register</Button>
              </Form>
            </Tab>
          </Tabs>

          {/* Continue with Social Media */}
          <div className="text-center mb-3">Or continue with</div>
          <Button variant="danger" className="mb-2 w-100">Continue with Google</Button>
          <Button variant="primary" className="mb-2 w-100">Continue with Facebook</Button>
          <Button variant="dark" className="w-100">Continue with GitHub</Button>
        </Modal.Body>

        <Modal.Footer className={theme === 'dark' ? 'bg-dark text-white' : ''}>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AuthModal;
