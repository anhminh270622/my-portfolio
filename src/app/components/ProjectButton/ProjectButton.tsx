import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from './ProjectButton.module.css';

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
            className={`${styles.button} ${isActive ? styles.active : ''}`}
        >
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={image}
                        alt={`${title} preview`}
                        fill
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <span className={styles.title}>
                            {title}
                        </span>
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ArrowRightOutlined className={styles.arrow} />
                            </a>
                        )}
                    </div>
                    <div className={styles.description}>
                        {description}
                    </div>
                    {stats && (
                        <div className={styles.stats}>
                            {stats}
                        </div>
                    )}
                    <div className={styles.technologies}>
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className={styles.tag}
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