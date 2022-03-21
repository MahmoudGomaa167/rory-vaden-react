import React from 'react'
import styles from './GetCourses.module.css'
const GetCourses = () => {
    return (
        <div className={styles.getCourses}>
            <h2>Get Rory's Influential Leader Video Course Free</h2>
            <p>when you sign up to receive his blog updates via email.</p>
            <div className={styles.signupForm}>
                <input type="email" placeholder="Email" />
                <button>sign up</button>
            </div>
        </div>
    )
}

export default GetCourses