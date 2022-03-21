import React from 'react'
import nameImage from '../../images/header/image-asset.svg'
import RoryImage from '../../images/header/Rory.svg'
import Logo from '../../images/header/favicon x1.svg'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.hero}>
            <span className={styles.shape}></span>
            <span className={styles.shape}></span>
            <span className={styles.shape}></span>
            <div className={styles.heroInfo}>
                <img src={nameImage} alt="Rory Vaden" />
                <h1><span>Become</span> a More Influential Leader</h1>
                <p>
                    SEE WHY NEW YORK TIMES BESTSELLING AUTHOR AND HALL OF FAME
                    LEADERSHIP SPEAKER <br />
                    <span>RORY VADEN</span> <br />
                    IS THE PERFECT CHOICE TO KEYNOTE YOUR NEXT EVENT
                </p>
                <div className={styles.heroBtns}>
                    <button className={styles.watchBtn}>
                        <i className="fa-solid fa-circle-play"></i>
                        watch rory's video
                    </button>
                    <button className={styles.requestBtn}>Request Speaking information</button>
                </div>
            </div>

            <div className={styles.heroImage}>
                <img src={RoryImage} alt="Rory Vaden" />
                <img src={Logo} alt="Logo" />
            </div>
        </div>
    )
}

export default Header