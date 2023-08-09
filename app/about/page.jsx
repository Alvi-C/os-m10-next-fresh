import React from 'react';
import styles from '../page.module.css';

const page = () => {
    return (
			<div>
            <h1 className='heading'>About page</h1>
            <p className={styles.myText}>This is the about page</p>
			</div>
		)
};

export default page;