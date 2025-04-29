import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import styles from './ExperienceButton.module.css';

interface ExperienceButtonProps {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies?: string[];
  link?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ExperienceButton: React.FC<ExperienceButtonProps> = ({
  company,
  position,
  period,
  description,
  technologies = [],
  link,
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
        <div className={styles.period}>
          {period}
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.title}>
              {position} · {company}
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
          {technologies.length > 0 && (
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
          )}
        </div>
      </div>
    </Button>
  );
};

export default ExperienceButton; 