import React from 'react'
import bookImage from '../../images/book/book.jpg'
import styles from './Book.module.css'

const Book = () => {
    return (
        <section className={styles.book} id="books">
            <div className={styles.bookInfo}>
                <div className={styles.bookImage}>
                    <img src={bookImage} alt="Book" />
                    <span className={styles.square}></span>
                    <span className={styles.square}></span>
                </div>
                <div className={styles.bookBrief}>
                    <h3>
                        NEW YORK TIMES BESTSELLING AUTHOR AND HALL OF FAME SPEAKER, RORY
                        VADEN IS THE WORLD’S LEADING EXPERT IN THE PSYCHOLOGY OF LEADERSHIP
                        AND INFLUENCE
                    </h3>
                    <p>
                        Rory Vaden has dedicated his entire life to the study of leadership
                        and influence. His education and experience took him all the way
                        from being raised by a single mother in a trailer park to becoming a
                        New York Times bestselling author, a world renowned Hall of Fame
                        keynote speaker, and an Eight-Figure entrepreneur.
                    </p>
                    <p>
                        He has developed dozens of insights, frameworks and methodologies
                        that led to a viral Ted talk and have been used by some of the most
                        successful organizations in the world to mobilize their sales
                        forces, develop their leaders and move their people into action.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Book