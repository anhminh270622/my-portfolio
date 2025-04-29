'use client';

import React, { useState } from 'react';
import { Typography } from 'antd';
import ProjectButton from '../ProjectButton';

const { Title } = Typography;

const projects = [
  {
    title: 'Spotify Profile',
    description: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
    image: '/images/image.png',
    link: 'https://spotify-profile.example.com',
    technologies: ['React', 'Express', 'Spotify API', 'Heroku'],
    stats: '⭐ 678'
  },
  {
    title: 'Halcyon Theme',
    description: 'Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.',
    image: '/images/image.png',
    link: 'https://halcyon-theme.example.com',
    technologies: ['VS Code', 'Sublime Text', 'Atom', 'iTerm'],
    stats: '⬇️ 100k+ Installs'
  },
  {
    title: 'brittanychiang.com (v4)',
    description: 'An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks',
    image: '/images/image.png',
    link: 'https://brittanychiang.com',
    technologies: ['Gatsby', 'React', 'Styled Components'],
    stats: '⭐ 6k+ ⑂ 3k+'
  }
];

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="projects">
      <Title level={2} style={{ color: '#ccd6f6', marginTop: '60px', marginBottom: '40px' }}>
        Projects
      </Title>
      <div>
        {projects.map((project, index) => (
          <ProjectButton
            key={index}
            {...project}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection; 