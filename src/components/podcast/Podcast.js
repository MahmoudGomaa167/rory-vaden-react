import React from 'react'
import podcastImage from '../../images/podcast/bkgrd4-1 - Copy.jpg'
import styles from './Podcast.module.css'
const Podcast = () => {
    return (
        <section className={styles.podcast} id="podcast">
            <div className={styles.podcastInfo}>
                <div className={styles.podcastBrief}>
                    <h2>
                        Procrastination is the most<br />
                        expensive invisible cost in <br />business today.
                    </h2>
                    <ul>
                        <li>
                            If you can’t figure out how to inspire and influence people to do
                            something different, then you and they will both stay stuck in the
                            status quo.
                        </li>
                        <li>You won’t grow revenues.</li>
                        <li>You won’t grow your reach.</li>
                        <li>You won’t grow your engagement.</li>
                        <li>You won’t grow your organization.</li>
                        <li>You won’t grow other leaders.</li>
                        <li>
                            This is the greatest risk of every organization and every leader
                            because it puts you at vulnerable risk of becoming antiquated,
                            mediocre, outperformed and ultimately irrelevant.
                        </li>
                    </ul>
                    <button>Request Speaking information</button>
                </div>

                <div className={styles.podcastImage}>
                    <img src={podcastImage} alt="podcast" />
                    <span className={styles.square}></span>
                    <span className={styles.square}></span>
                    <span className={styles.square}></span>
                    <span className={styles.square}></span>
                    <span className={styles.square}></span>
                    <span className={styles.square}></span>
                    <span className={styles.square}></span>
                    <span className={styles.square}></span>
                    <span className={styles.square}></span>
                </div>
            </div>
        </section>
    )
}

export default Podcast