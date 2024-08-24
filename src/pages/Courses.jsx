import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Courses() {
  return (
    <Container style={{ marginTop: '100px' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center">Our Courses</h2>
          <p className="text-center">Explore the variety of courses we offer to kickstart your career.</p>
          <Row>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Fullstack Development</Card.Title>
                  <Card.Text>Learn to build complete web applications from front to back.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Frontend Development</Card.Title>
                  <Card.Text>Master the art of building visually stunning and responsive websites.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Backend Development</Card.Title>
                  <Card.Text>Specialize in server-side development, databases, and API integration.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Data Science</Card.Title>
                  <Card.Text>Dive into data analysis, machine learning, and AI.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Courses;
