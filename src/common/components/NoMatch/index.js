import React from 'react';
import styles from './index.scss';

const className = [styles.center, styles.font].join(' ');

const NoMatch = () => (
    <div className={className}>404</div>
);

export default NoMatch;
