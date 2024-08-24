import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

function EnrollmentSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="enrollment" className={`${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} py-5 text-center`}>
      <Container>
        <h2 className="display-5">Enrollment Options</h2>
        <Row className="mt-4">
          <Col md={4}>
            <Card className={`mb-4 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-dark'}`}>
              <Card.Body>
                <Card.Title>Full-Time Immersive</Card.Title>
                <Card.Text>Intensive 12-week program</Card.Text>
                <ul className="list-unstyled">
                  <li>Monday to Friday, 9 AM - 5 PM</li>
                  <li>In-person or remote options</li>
                  <li>Career services included</li>
                  <li>Project-based curriculum</li>
                </ul>
                <Button variant="primary" block>Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`mb-4 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-dark'}`}>
              <Card.Body>
                <Card.Title>Part-Time Flex</Card.Title>
                <Card.Text>24-week evening & weekend program</Card.Text>
                <ul className="list-unstyled">
                  <li>Tuesdays & Thursdays, 6:30 PM - 9:30 PM</li>
                  <li>Saturdays, 10 AM - 2 PM</li>
                  <li>Online live instruction</li>
                  <li>Ideal for working professionals</li>
                </ul>
                <Button variant="primary" block>Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`mb-4 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-dark'}`}>
              <Card.Body>
                <Card.Title>Self-Paced Online</Card.Title>
                <Card.Text>Learn at your own pace</Card.Text>
                <ul className="list-unstyled">
                  <li>Access course materials 24/7</li>
                  <li>6-month program access</li>
                  <li>Weekly live Q&A sessions</li>
                  <li>Self-paced projects and assignments</li>
                </ul>
                <Button variant="primary" block>Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default EnrollmentSection;
