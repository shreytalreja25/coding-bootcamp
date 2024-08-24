import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Enrollment() {
  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
        <Col md={6} className="mx-auto">
          <h2>Enroll in Our Bootcamp</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formCourse" className="mt-3">
              <Form.Label>Select Course</Form.Label>
              <Form.Control as="select">
                <option>Fullstack Development</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Data Science</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Enroll Now
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Enrollment;
