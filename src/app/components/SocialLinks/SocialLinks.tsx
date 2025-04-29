import React from 'react';
import { GithubOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
import { CodepenCircleOutlined } from '@ant-design/icons';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
    return (
        <div className={styles.socialLinksContainer}>
            <div className={styles.socialLinks}>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <GithubOutlined />
                </a>
                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <LinkedinOutlined />
                </a>
                <a
                    href="https://codepen.io/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <CodepenCircleOutlined />
                </a>
                <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                >
                    <InstagramOutlined />
                </a>
            </div>
        </div>
    );
};

export default SocialLinks; 