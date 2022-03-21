import React from 'react'
import styles from './Blog.module.css'
import Card from './card/Card'

const Blog = () => {
    return (
        <section className={styles.testimonials} id="blog">
            <div className={styles.testimonialsInfo}>
                <h2><span>Speaking</span> Testimonials</h2>
                <div className={styles.cards}>
                    <Card />
                </div>

                <div className={styles.indicators}>
                    <ul>
                        <li className={styles.active}></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <button>See All</button>
            </div>
        </section>
    )
}

export default Blog