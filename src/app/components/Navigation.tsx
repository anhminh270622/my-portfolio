'use client';

import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      key: 'about',
      label: (
        <Link href="#about" style={{ 
          color: activeSection === 'about' ? '#64ffda' : '#8892b0',
          fontSize: '16px',
          fontWeight: activeSection === 'about' ? 600 : 400,
          transition: 'all 0.2s ease-in-out'
        }}>
          About
        </Link>
      ),
    },
    {
      key: 'experience',
      label: (
        <Link href="#experience" style={{ 
          color: activeSection === 'experience' ? '#64ffda' : '#8892b0',
          fontSize: '16px',
          fontWeight: activeSection === 'experience' ? 600 : 400,
          transition: 'all 0.2s ease-in-out'
        }}>
          Experience
        </Link>
      ),
    },
    {
      key: 'projects',
      label: (
        <Link href="#projects" style={{ 
          color: activeSection === 'projects' ? '#64ffda' : '#8892b0',
          fontSize: '16px',
          fontWeight: activeSection === 'projects' ? 600 : 400,
          transition: 'all 0.2s ease-in-out'
        }}>
          Projects
        </Link>
      ),
    },
  ];

  return (
    <div style={{ marginTop: '60px' }}>
      <Menu
        mode="vertical"
        selectedKeys={[activeSection]}
        style={{
          background: 'transparent',
          border: 'none',
          fontSize: '16px',
        }}
        items={menuItems}
      />
    </div>
  );
};

export default Navigation; 