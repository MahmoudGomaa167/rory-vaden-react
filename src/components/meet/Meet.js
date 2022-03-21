import React from 'react'
import meetImage from '../../images/meet/Favorite-Rory-Vaden-Stairs-onken-20181004-Summit-Of-Greatness-0385.jpg'
import styles from './Meet.module.css'

const Meet = () => {
    return (
        <section className={styles.meet} id="meet">
            <div className={styles.meetInfo}>
                <div className={styles.meetBrief}>
                    <h2><span>Meet Rory</span> Vaden</h2>
                    <p>
                        Rory Vaden is the New York Times bestselling author of Take the
                        Stairs. His insights have been featured in the Wall Street Journal,
                        Forbes, CNN, Entrepreneur, Inc, on Fox News national television and
                        in several other major media outlets. As a world-renowned speaker,
                        His Tedx talk has been viewed over 3 million times, he is a 2x . . .
                    </p>
                    <button>learn more</button>
                </div>
                <div className={styles.meetImage}>
                    <img
                        src={meetImage} alt="meet"
                    />
                </div>
            </div>
        </section>
    )
}

export default Meet