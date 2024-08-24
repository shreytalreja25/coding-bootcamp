import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import EnrollmentSection from '../components/EnrollmentSection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import CallToActionSection from '../components/CallToActionSection';

function CodingBootcamp() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <HeroSection />
        <CoursesSection />
        <EnrollmentSection />
        <SuccessStoriesSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}

export default CodingBootcamp;
