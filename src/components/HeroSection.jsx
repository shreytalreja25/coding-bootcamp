import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function HeroSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section style={{marginTop: '3%'}} className={`py-5 text-center ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="container">
        <h1 className="display-4">Launch Your Coding Career</h1>
        <p className="lead">
          Join CodeCraft Academy and master full-stack web development and more. Transform your future with cutting-edge courses and expert instruction.
        </p>
        <div>
          <button className="btn btn-primary me-2">Explore Courses</button>
          <button className="btn btn-outline-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
