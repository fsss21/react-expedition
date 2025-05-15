import React from 'react';
import { useNavigate } from 'react-router';
import styles from './Preview.module.css';

import expedition from '../../video/artic_expedition.mp4';

export default function Preview() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/main');
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            <video className={styles.video} src={expedition} autoPlay loop muted playsInline />
        </div>
    );
}
