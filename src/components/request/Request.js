import React from 'react'
import styles from './Request.module.css'

const Request = () => {
    return (
        <section className={styles.request}>
            <div className={styles.requestInfo}>
                <h2>
                    LEARN THE SECRETS OF INFLUENCING PEOPLE AND MOVING THEM TO TAKE ACTION
                </h2>
                <p>
                    Whether it is through his viral TED talk, his compelling live keynotes
                    or his in demand virtual training, Rory can help any individual,
                    leader, or organization to grow their influence and become more
                    effective at inspiring people to make change. Read more ...
                </p>
                <button>Request Speaking information</button>
            </div>
            <span className={styles.square}></span>
            <span className={styles.square}></span>
            <div className={styles.overlay}></div>
        </section>
    )
}

export default Request