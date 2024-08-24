import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

function CoursesSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'} py-5 text-center`}>
      <Container>
        <h2 className="display-5">Our Courses</h2>
        <Row className="mt-4">
          <Col md={4}>
            <Card className={`mb-4 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-dark'}`}>
              <Card.Body>
                <Card.Title>Full Stack Web Development</Card.Title>
                <Card.Text>Master front-end and back-end technologies</Card.Text>
                <ul className="list-unstyled">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React and Node.js</li>
                  <li>Database Management</li>
                  <li>API Development</li>
                </ul>
                <Button variant="primary" block>Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`mb-4 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-dark'}`}>
              <Card.Body>
                <Card.Title>Data Science & Machine Learning</Card.Title>
                <Card.Text>Dive into the world of data and AI</Card.Text>
                <ul className="list-unstyled">
                  <li>Python for Data Science</li>
                  <li>Statistical Analysis</li>
                  <li>Machine Learning Algorithms</li>
                  <li>Big Data Technologies</li>
                </ul>
                <Button variant="primary" block>Enroll Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`mb-4 ${theme === 'dark' ? 'bg-secondary text-white' : 'bg-white text-dark'}`}>
              <Card.Body>
                <Card.Title>Mobile App Development</Card.Title>
                <Card.Text>Create apps for iOS and Android</Card.Text>
                <ul className="list-unstyled">
                  <li>Swift for iOS</li>
                  <li>Kotlin for Android</li>
                  <li>Cross-platform with React Native</li>
                  <li>App Store Deployment</li>
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

export default CoursesSection;
