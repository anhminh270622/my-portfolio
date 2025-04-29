'use client';

import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AboutSection = () => {
    return (
        <div id="about">
            <Title level={2} style={{ color: '#ccd6f6', marginBottom: '40px' }}>
                About Me
            </Title>
            <Paragraph
                style={{
                    color: '#8892b0',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word'
                }}
            >
                I&apos;m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
                <br />
                <br />
                Currently, I&apos;m a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo&apos;s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
                <br />
                <br />
                In the past, I&apos;ve had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.
                <br />
                <br />
                In my spare time, I’m usually climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for.
            </Paragraph>
        </div>
    );
};

export default AboutSection; 