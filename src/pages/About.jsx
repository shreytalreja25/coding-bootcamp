import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
        <Col md={12}>
          <h2>About Us</h2>
          <p>
            Our Coding Bootcamp is dedicated to providing high-quality education to aspiring developers and tech professionals. 
            Our mission is to empower students with the skills and knowledge needed to thrive in the tech industry.
          </p>
          <p>
            With a focus on hands-on learning and real-world projects, our bootcamp offers a unique and immersive experience.
            Our instructors are experienced professionals who are passionate about teaching and mentoring the next generation of developers.
          </p>
          <p>
            Join us and take the first step towards a rewarding career in tech!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
