'use client';

import React, { useState } from 'react';
import { Typography } from 'antd';
import ExperienceButton from '../ExperienceButton/ExperienceButton';
import { experiences } from './data';

const { Title, Paragraph } = Typography;


const ExperienceSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id="experience">
            <Title level={2} style={{ color: '#ccd6f6', marginTop: '60px', marginBottom: '40px' }}>
                Experience
            </Title>
            <Paragraph style={{ color: '#8892b0', fontSize: '16px', lineHeight: '1.6', marginBottom: '40px' }}>
                I&apos;ve had the opportunity to work in diverse environments — from startups to large corporations,
                advertising agencies to digital product studios.
            </Paragraph>
            <div>
                {experiences.map((exp, index) => (
                    <ExperienceButton
                        key={index}
                        {...exp}
                        isActive={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection; 