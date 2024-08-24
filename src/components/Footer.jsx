import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white text-center">
      <Container>
        <p className="mb-0">&copy; 2023 CodeCraft Academy. All rights reserved.</p>
        <nav className="mt-2">
          <a href="#" className="text-white text-decoration-none mx-2">Terms of Service</a>
          <a href="#" className="text-white text-decoration-none mx-2">Privacy</a>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
