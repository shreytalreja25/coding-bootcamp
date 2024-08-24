import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container style={{ marginTop: '100px' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title as="h2">Welcome to the Coding Bootcamp</Card.Title>
              <Card.Text>
                Learn to code from the ground up and kickstart your tech career with our world-class courses.
              </Card.Text>
              <Button variant="primary" size="lg" as={Link} to="/courses">Explore Courses</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
