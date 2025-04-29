'use client';

import React from 'react';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';

const RightSection = () => {
  return (
    <section style={{
      width: '50%',
      marginLeft: '50%',
      padding: '100px 50px',
      minHeight: '100vh',
      overflowY: 'auto',
    }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    </section>
  );
};

export default RightSection; 