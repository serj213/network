import React from "react";
import styles from './header.module.scss';

import logo from '../../assets/images/logo.png';

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <div className={styles.header__logo}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header