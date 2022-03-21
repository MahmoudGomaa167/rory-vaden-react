import React from 'react'
import homeReputation from '../../images/Learning/home-reputation.jpg'
import styles from './Learning.module.css'

const Learning = () => {
    return (
        <section className={styles.learning}>
            <div className={styles.learningInfo}>
                <div className={styles.learningImage}>
                    <img src={homeReputation} alt="Learning" />
                </div>
                <div className={styles.learningBrief}>
                    <h2>
                        LEARN THE PSYCHOLOGY OF <br />LEADERSHIP, INFLUENCE, AND MOVING
                        PEOPLE TO ACTION
                    </h2>
                    <p>
                        Leadership is the art of moving people into productive action. As
                        you become a better leader you will get more opportunity, have more
                        influence, earn more income and make more impact.
                    </p>
                    <p>
                        But whether you’re trying to lead yourself or a team, the problem
                        you’re up against is procrastination.
                    </p>
                    <p>
                        In most cases people don’t want to move. They don’t want to change.
                        They don’t want to act. And so instead they fall victim to
                        distraction, dilution, complacency, and stalled productivity.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Learning