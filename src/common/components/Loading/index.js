import React from 'react';
import styles from './index.scss';

const className = [styles.center, styles.font].join(' ');

const Loading  = () => (
    <div className={styles.page}>
        <div className={className}>Loading...</div>
    </div>
);

export default Loading;
