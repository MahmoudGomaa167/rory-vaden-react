import React, { useState } from 'react'
import success01 from '../../images/insights/success-removebg-preview-10.svg'
import success02 from '../../images/insights/success-removebg-preview-9.svg'
import success03 from '../../images/insights/success-removebg-preview-8.svg'
import success04 from '../../images/insights/success-removebg-preview-7.svg'
import success05 from '../../images/insights/success-removebg-preview-6.svg'
import success06 from '../../images/insights/success-removebg-preview-5.svg'
import success07 from '../../images/insights/success-removebg-preview-4.svg'
import success08 from '../../images/insights/success-removebg-preview-3.svg'
import success09 from '../../images/insights/success-removebg-preview-2.svg'
import success10 from '../../images/insights/success-removebg-preview-1.svg'
import success11 from '../../images/insights/success-removebg-preview.svg'
import styles from './Insights.module.css'
import InsightImages from './insightsImages/InsightImages'

const Insights = () => {
    const [images, setImages] = useState([success01, success02, success03, success04, success05, success06, success07, success08, success09, success10, success11])
    return (
        <section className={styles.insights}>
            <div className={styles.insightsInfo}>
                <h2>Rory's insights have been featured in:</h2>
                <div className={styles.insightsNetworks}>
                    {images.map((image, index) => (
                        <InsightImages key={index} src={image} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Insights