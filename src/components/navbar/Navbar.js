import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../images/header/favicon.svg'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>

            <div className={styles.list}>
                <span className={styles.triangle}></span>
                <ul>
                    <li>
                        <a href="#home">home</a>
                    </li>
                    <li>
                        <a href="#meet">meet rory</a>
                    </li>
                    <li>
                        <a href="#podcast">podcast</a>
                    </li>
                    <li>
                        <a href="#books">books</a>
                    </li>
                    <li>
                        <a href="#speaking">speaking</a>
                    </li>
                    <li>
                        <a href="#media">media</a>
                    </li>
                    <li>
                        <a href="#branding">personal branding</a>
                    </li>
                    <li>
                        <a href="#blog">blog</a>
                    </li>
                    <li>
                        <a href="#training">free training</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                    <div className={styles.signupBtn}>
                        <button>sign me up!</button>
                    </div>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar