import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Testimonials() {
  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
        <Col md={12}>
          <h2 className="text-center">What Our Students Say</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Text>
                    "This bootcamp was a life-changing experience. The instructors were fantastic, and the curriculum was challenging but rewarding."
                  </Card.Text>
                  <Card.Footer className="text-muted">- Jane Doe</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Text>
                    "I learned so much in just a few months. The hands-on projects really helped solidify the concepts."
                  </Card.Text>
                  <Card.Footer className="text-muted">- John Smith</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Text>
                    "The support from the instructors and the community was incredible. I felt prepared to start my career in tech."
                  </Card.Text>
                  <Card.Footer className="text-muted">- Emily Davis</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
