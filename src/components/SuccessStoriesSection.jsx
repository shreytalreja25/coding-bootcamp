import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

function SuccessStoriesSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} py-5 text-center`}>
      <Container>
        <h2 className="display-5">Student Success Stories</h2>
        <Row className="mt-4">
          <Col md={4}>
            <Card className={`mb-4 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-dark'}`}>
              <Card.Body>
                <Card.Title>Sarah Johnson</Card.Title>
                <Card.Text>Full Stack Web Development Graduate</Card.Text>
                <p>
                  "CodeCraft Academy transformed my career. I went from a non-technical background to landing a job as a full stack developer at a top tech company."
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`mb-4 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-dark'}`}>
              <Card.Body>
                <Card.Title>Michael Chen</Card.Title>
                <Card.Text>Data Science & Machine Learning Graduate</Card.Text>
                <p>
                  "The hands-on projects and expert instructors at CodeCraft gave me the skills and confidence to transition into a rewarding career in data science."
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`mb-4 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-dark'}`}>
              <Card.Body>
                <Card.Title>Emily Rodriguez</Card.Title>
                <Card.Text>Mobile App Development Graduate</Card.Text>
                <p>
                  "Thanks to CodeCraft's mobile app development course, I was able to launch my own startup and create an app that's now used by thousands of people."
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SuccessStoriesSection;
