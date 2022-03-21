import React, { useState } from 'react'
import presentation01 from '../../images/presentation/Cargill-29.svg'
import presentation02 from '../../images/presentation/Cargill-28.svg'
import presentation03 from '../../images/presentation/Cargill-27.svg'
import presentation04 from '../../images/presentation/Cargill-26.svg'
import presentation05 from '../../images/presentation/Cargill-25.svg'
import presentation06 from '../../images/presentation/Cargill-24.svg'
import presentation07 from '../../images/presentation/Cargill-23.svg'
import presentation08 from '../../images/presentation/Cargill-22.svg'
import presentation09 from '../../images/presentation/Cargill-21.svg'
import presentation10 from '../../images/presentation/Cargill-20.svg'
import presentation11 from '../../images/presentation/Cargill-19.svg'
import presentation12 from '../../images/presentation/Cargill-18.svg'
import presentation13 from '../../images/presentation/Cargill-17.svg'
import presentation14 from '../../images/presentation/Cargill-16.svg'
import presentation15 from '../../images/presentation/Cargill-15.svg'
import presentation16 from '../../images/presentation/Cargill-14.svg'
import presentation17 from '../../images/presentation/Cargill-13.svg'
import presentation18 from '../../images/presentation/Cargill-12.svg'
import presentation19 from '../../images/presentation/Cargill-11.svg'
import presentation20 from '../../images/presentation/Cargill-10.svg'
import presentation21 from '../../images/presentation/Cargill-9.svg'
import presentation22 from '../../images/presentation/Cargill-8.svg'
import presentation23 from '../../images/presentation/Cargill-7.svg'
import presentation24 from '../../images/presentation/Cargill-6.svg'
import presentation25 from '../../images/presentation/Cargill-5.svg'
import presentation26 from '../../images/presentation/Cargill-4.svg'
import presentation27 from '../../images/presentation/Cargill-3.svg'
import presentation28 from '../../images/presentation/Cargill-2.svg'
import presentation29 from '../../images/presentation/Cargill-1.svg'
import presentation30 from '../../images/presentation/Cargill.svg'
import presentationAudience from '../../images/presentation/A-Rory-Vaden-Crown-Council-02-2017-102-wide-audience-close-color.jpg'
import styles from './Presentation.module.css'
import PresentationImages from './presentationImages/PresentationImages'

const Presentation = () => {
    const [images, setImages] = useState([presentation01, presentation02, presentation03, presentation04, presentation05, presentation06, presentation07, presentation08, presentation09, presentation10, presentation11, presentation12, presentation13, presentation14, presentation15, presentation16, presentation17, presentation18, presentation19, presentation20, presentation21, presentation22, presentation23, presentation24, presentation25, presentation26, presentation27, presentation28, presentation29, presentation30])
    return (
        <section className={styles.presentation}>
            <h3><span>Rory has delivered </span>keynote presentations to:</h3>
            <div className={styles.presentationSponsors}>
                {images.map((image, index) => (
                    <PresentationImages key={index} src={image} />
                ))}
                <button className={styles.left}><i className="fa-solid fa-chevron-left"></i></button>
                <button className={styles.right}><i className="fa-solid fa-chevron-right"></i></button>
            </div>

            <div className={styles.presentationInfo}>
                <div className={styles.presentationImage}>
                    <img
                        src={presentationAudience} alt="Presentation"
                    />
                    <div className={styles.watchBtn}>
                        <button>
                            <i className="fa-solid fa-circle-play"></i>
                            Watch Rory's Video
                        </button>
                    </div>
                </div>

                <div className={styles.presentationBrief}>
                    <h3>Popular Keynote Program</h3>
                    <ul>
                        <li>Take the Stairs (Motivation and Inspiration)</li>
                        <li>Multiply Your Time (Performance and Productivity)</li>
                        <li>The Influential Leader (Leadership and Teamwork)</li>
                        <li>
                            Influential Personal Brand (Influence and Digital Marketing)
                        </li>
                        <li>Rock Solid Reputation (Culture and Customer Experience)</li>
                        <li>Design a Custom Program</li>
                    </ul>
                    <button>Request Speaking information</button>
                </div>
            </div>
        </section>
    )
}

export default Presentation