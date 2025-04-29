'use client';

import React from 'react';
import { Typography } from 'antd';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks/SocialLinks';
const { Title, Text } = Typography;

const LeftSection = () => {
    return (
        <section style={{
            width: '50%',
            padding: '100px 50px',
            position: 'fixed',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <div>
                <Title style={{ color: '#ccd6f6', marginBottom: '10px', fontSize: '80px' }}>
                    Your Name
                </Title>
                <Title level={2} style={{ color: '#8892b0', marginTop: 0 }}>
                    Front End Engineer
                </Title>
                <div>
                    <Text style={{ color: '#8892b0', fontSize: '16px' }}>
                        I build accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering.
                    </Text>
                </div>
                <Navigation />
            </div>
            <div>
                <SocialLinks />
            </div>
        </section>
    );
};

export default LeftSection; 