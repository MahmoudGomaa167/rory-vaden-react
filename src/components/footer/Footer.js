import React from 'react'
import footerImage from '../../images/header/image-asset.svg'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerInfo}>
                <div className={styles.footerImage}>
                    <img src={footerImage} alt="Rory Vaden" />
                </div>

                <div className={styles.footerList}>
                    <ul>
                        <div className={styles.listLinks}>
                            <li>
                                <a className="active" href="#home">home</a>
                            </li>
                            <li>
                                <a href="#books">books</a>
                            </li>
                        </div>
                        <div className={styles.listLinks}>
                            <li>
                                <a href="#home">social media</a>
                            </li>
                            <li>
                                <a href="#home">free trainings</a>
                            </li>
                        </div>
                        <div className={styles.listLinks}>
                            <li>
                                <a href="#meet">meet rory</a>
                            </li>
                            <li>
                                <a href="#podcast">podcast</a>
                            </li>
                        </div>
                        <div className={styles.listLinks}>
                            <li>
                                <a href="#home">personal branding</a>
                            </li>
                            <li>
                                <a href="#home">contact</a>
                            </li>
                        </div>
                        <div className={styles.listLinks}>
                            <li>
                                <a href="#blog">blog</a>
                            </li>
                            <li>
                                <a href="#home">speaking</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

            <div className={styles.footerIcons}>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-pinterest"></i>
            </div>

            <div className={styles.copyright}>
                <p>Copyright © 2021 Buconcy. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer