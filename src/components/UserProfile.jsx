import React, { useState } from "react";
import { Card, Badge, Button, Tab, Tabs, ProgressBar } from "react-bootstrap";
import { FaUser, FaCode, FaBook, FaTrophy } from 'react-icons/fa';  // Import icons from react-icons
import Header from '../components/Header';

// Mock Data for Courses and Achievements
const courses = [
  { id: 1, name: "Introduction to Web Development", progress: 100 },
  { id: 2, name: "JavaScript Fundamentals", progress: 75 },
  { id: 3, name: "React Basics", progress: 50 },
  { id: 4, name: "Node.js and Express", progress: 25 },
];

const achievements = [
  { id: 1, name: "First Line of Code", description: "Wrote your first line of code", icon: <FaCode /> },
  { id: 2, name: "Quick Learner", description: "Completed 5 lessons in one day", icon: <FaBook /> },
  { id: 3, name: "Bug Squasher", description: "Fixed 10 bugs in your code", icon: <FaTrophy /> },
];

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      {/* Adding padding-top to avoid header overlap */}
      <div className="container my-5" style={{ paddingTop: '80px' }}>  
        <Card className="mx-auto" style={{ maxWidth: '600px' }}>
          <Card.Header className="d-flex align-items-center">
            <img 
              src="https://github.com/shadcn.png" 
              alt="User Avatar" 
              className="rounded-circle me-3" 
              style={{ width: '80px', height: '80px' }} 
            />
            <div>
              <h4>John Doe</h4>
              <p className="text-muted">Web Development Student</p>
            </div>
          </Card.Header>
          <Card.Body>
            <Tabs 
              activeKey={activeTab} 
              onSelect={(k) => setActiveTab(k)} 
              className="mb-3"
            >
              <Tab eventKey="courses" title="Courses">
                <h5>My Courses</h5>
                {courses.map((course) => (
                  <div key={course.id} className="my-3">
                    <div className="d-flex justify-content-between">
                      <span>{course.name}</span>
                      <span>{course.progress}%</span>
                    </div>
                    <ProgressBar now={course.progress} />
                  </div>
                ))}
              </Tab>

              <Tab eventKey="achievements" title="Achievements">
                <h5>My Achievements</h5>
                <div className="row">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="col-md-6 my-2">
                      <Card>
                        <Card.Body className="d-flex align-items-center">
                          <Badge bg="secondary" className="me-2">{achievement.icon}</Badge>
                          <div>
                            <h6>{achievement.name}</h6>
                            <p className="mb-0">{achievement.description}</p>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </Tab>
            </Tabs>
            <Button variant="primary" className="w-100 mt-3">
              <FaUser className="me-2" /> Edit Profile
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
