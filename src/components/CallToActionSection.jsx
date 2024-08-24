import React, { useContext } from 'react';
import { Container, Button, Form, InputGroup } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

function CallToActionSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} py-5 text-center`}>
      <Container>
        <h2 className="display-5">Ready to Start Your Coding Journey?</h2>
        <p className="lead">Join CodeCraft Academy today and take the first step towards a rewarding career in tech.</p>
        <InputGroup className="mt-4 mx-auto" style={{ maxWidth: '500px' }}>
          <Form.Control type="email" placeholder="Enter your email" className={`${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-dark'}`} />
          <Button variant="primary">Get Started</Button>
        </InputGroup>
        <p className="d-block mt-2">
          By signing up, you agree to our <a href="#" className="text-decoration-underline">Terms & Conditions</a>
        </p>
      </Container>
    </section>
  );
}

export default CallToActionSection;
