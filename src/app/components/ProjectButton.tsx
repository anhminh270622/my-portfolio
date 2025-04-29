import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';

interface ProjectButtonProps {
    title: string;
    description: string;
    link?: string;
    technologies: string[];
    stats?: string;
    image: string;
    isActive?: boolean;
    onClick?: () => void;
}

const ProjectButton: React.FC<ProjectButtonProps> = ({
    title,
    description,
    link,
    technologies,
    stats,
    image,
    isActive = false,
    onClick,
}) => {
    return (
        <Button
            type="text"
            onClick={onClick}
            className={`project-button ${isActive ? 'active' : ''}`}
            style={{
                width: '100%',
                height: 'auto',
                padding: '20px',
                textAlign: 'left',
                marginBottom: '10px',
                background: isActive ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                border: 'none',
            }}
        >
            <div style={{ width: '100%', display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
                <div style={{ width: '200px', height: '120px', position: 'relative', flexShrink: 0 }}>
                    <Image
                        src={image}
                        alt={`${title} preview`}
                        fill
                        style={{
                            objectFit: 'cover',
                            borderRadius: '4px',
                        }}
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#ccd6f6', fontSize: '20px', fontWeight: 500 }}>
                            {title}
                        </span>
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ArrowRightOutlined style={{ color: '#64ffda' }} />
                            </a>
                        )}
                    </div>
                    <div style={{ color: '#8892b0', marginTop: '8px', fontSize: '16px', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>
                        {description}
                    </div>
                    {stats && (
                        <div style={{ color: '#8892b0', marginTop: '8px', fontSize: '14px' }}>
                            {stats}
                        </div>
                    )}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                style={{
                                    padding: '4px 12px',
                                    background: 'rgba(100, 255, 218, 0.1)',
                                    color: '#64ffda',
                                    borderRadius: '16px',
                                    fontSize: '14px',
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Button>
    );
};

export default ProjectButton; 