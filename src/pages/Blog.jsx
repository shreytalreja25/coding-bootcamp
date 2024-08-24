import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Blog() {
  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
        <Col md={12}>
          <h2>Our Blog</h2>
          <p>Stay updated with the latest news, tips, and insights from our team.</p>
          <Row>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Introduction to Fullstack Development</Card.Title>
                  <Card.Text>Discover the path to becoming a fullstack developer in 2024.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Why Learn Data Science?</Card.Title>
                  <Card.Text>Data Science is the future. Learn why it’s a must-have skill.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Building Responsive Websites</Card.Title>
                  <Card.Text>Understand the importance of responsive design in modern web development.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
