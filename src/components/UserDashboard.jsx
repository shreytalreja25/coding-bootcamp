import React, { useContext } from "react";
import { useAuth } from "../context/AuthContext";
import { Tabs, Tab, ProgressBar, Card, Button, Container, Row, Col } from "react-bootstrap";
import { Bell, Book, Calendar } from "react-bootstrap-icons";
import { Form } from 'react-bootstrap';
import { ThemeContext } from "../context/ThemeContext"; // Importing ThemeContext for dark mode

export default function UserDashboard() {
  const { currentUser } = useAuth(); // Get the current user from AuthContext
  const { theme } = useContext(ThemeContext); // Use theme from ThemeContext

  // Conditional classes based on theme
  const containerClass = theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-white';
  const cardClass = theme === 'light' ? 'bg-white text-dark' : 'bg-secondary text-white';
  const buttonVariant = theme === 'light' ? 'primary' : 'secondary';

  // Full-screen background style for dark mode
  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: theme === 'light' ? '#f8f9fa' : '#000', // Full black background for dark mode
    margin: '0',
    padding: '0',
  };

  return (
    <div style={pageStyle}>
      <Container className={`mt-5 p-3 ${containerClass}`}>
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h1>Welcome back, {currentUser ? currentUser.displayName : "User"}!</h1>
          <div className="d-flex align-items-center">
            <Button variant={buttonVariant} className="me-3">
              <Bell size={20} />
            </Button>
            <div className="rounded-circle bg-secondary d-flex justify-content-center align-items-center text-white" style={{ width: '40px', height: '40px' }}>
              {currentUser ? currentUser.displayName.charAt(0) : "U"}
            </div>
          </div>
        </header>

        <Tabs defaultActiveKey="overview" className="mb-4">
          <Tab eventKey="overview" title="Overview">
            <Row className="mb-4">
              <Col md={3}>
                <Card className={cardClass}>
                  <Card.Body>
                    <Card.Title>Total Courses</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2>12</h2>
                      <Book size={20} />
                    </div>
                    <small>4 in progress</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className={cardClass}>
                  <Card.Body>
                    <Card.Title>Completed Courses</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2>8</h2>
                      <Book size={20} />
                    </div>
                    <small>+2 this month</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className={cardClass}>
                  <Card.Body>
                    <Card.Title>Achievements</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2>16</h2>
                      <Book size={20} />
                    </div>
                    <small>+4 new badges</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className={cardClass}>
                  <Card.Body>
                    <Card.Title>Active Days</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2>24</h2>
                      <Calendar size={20} />
                    </div>
                    <small>Current streak</small>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="courses" title="Courses">
            <h2 className="mb-4">Your Courses</h2>
            <Row>
              <Col md={4}>
                <Card className={cardClass}>
                  <Card.Body>
                    <Card.Title>Python for Data Science</Card.Title>
                    <small>Intermediate • 8 weeks</small>
                    <ProgressBar now={75} label="75%" className="mt-3" />
                    <Button variant={buttonVariant} className="mt-3 w-100">Continue Learning</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className={cardClass}>
                  <Card.Body>
                    <Card.Title>JavaScript Fundamentals</Card.Title>
                    <small>Beginner • 6 weeks</small>
                    <ProgressBar now={30} label="30%" className="mt-3" />
                    <Button variant={buttonVariant} className="mt-3 w-100">Continue Learning</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className={cardClass}>
                  <Card.Body>
                    <Card.Title>Machine Learning Basics</Card.Title>
                    <small>Advanced • 12 weeks</small>
                    <ProgressBar now={10} label="10%" className="mt-3" />
                    <Button variant={buttonVariant} className="mt-3 w-100">Continue Learning</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="achievements" title="Achievements">
            <h2 className="mb-4">Your Achievements</h2>
            <Row>
              <Col md={4}>
                <Card className={cardClass}>
                  <Card.Body>
                    <Card.Title>Python Master</Card.Title>
                    <small>Completed all Python courses</small>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className={cardClass}>
                  <Card.Body>
                    <Card.Title>Quick Learner</Card.Title>
                    <small>Completed 5 courses in one month</small>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>

          <Tab eventKey="settings" title="Settings">
            <h2 className="mb-4">Account Settings</h2>
            <Card className={cardClass}>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="john@example.com" />
                  </Form.Group>

                  <Button variant={buttonVariant} type="submit">
                    Save Changes
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}
