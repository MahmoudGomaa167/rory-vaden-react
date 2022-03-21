import React from 'react'
import blog01 from '../../../images/testimonials/Image place here.jpg'
import blog02 from '../../../images/testimonials/Image place here 2.jpg'
import blog03 from '../../../images/testimonials/Image place here 3.jpg'
import blog04 from '../../../images/testimonials/Image place here 4.jpg'
import styles from './Card.module.css'

const Card = () => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <img src={blog01} alt="blog" />
                    <div className={styles.overlay}></div>
                </div>
                <h5>Founder Of Advisor Excel</h5>
                <blockquote>
                    “Your session was one of the very best and most valuable we’ve
                    ever had. Your content is great. Your stage presence is fantastic
                    and you have just the right amount of humor. Incredible job!”
                </blockquote>
                <span className={styles.name}>Cody Foster</span>
            </div>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <img src={blog02} alt="blog" />
                    <div className={styles.overlay}></div>
                </div>
                <h5>US Field Development Manager At Pampered Chef</h5>
                <blockquote>
                    “Your presentation was spot on! They LOVED you!”
                </blockquote>
                <span className={styles.name}>Judy Joel</span>
            </div>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <img src={blog03} alt="blog" />
                    <div className={styles.overlay}></div>
                </div>
                <h5>Vice President Of Vendor Alliance At Budget Blinds</h5>
                <blockquote>“Thanks for an incredible job well done!”</blockquote>
                <span className={styles.name}>Tracy Christman</span>
            </div>
            <div className={styles.card}>
                <div className={styles.cardImage}>
                    <img src={blog04} alt="blog" />
                    <div className={styles.overlay}></div>
                </div>
                <h5>Meeting Planner &#38;
                    Services Coordinator At Furniture First</h5>
                <blockquote>
                    “Rory is a dynamic speaker with a great message!”
                </blockquote>
                <span className={styles.name}>Darby Hawkins</span>
            </div>
        </>

    )
}

export default Card