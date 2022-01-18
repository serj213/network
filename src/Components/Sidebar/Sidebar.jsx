import React from "react";
import styles from './sidebar.module.scss';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.sidebar__navigate}>
                <ul>
                    <li className={styles.sidebar__item}>
                        profile
                    </li>

                    <li className={styles.sidebar__item}>
                        messages
                    </li>

                    <li className={styles.sidebar__item}>
                        news
                    </li>

                    <li className={styles.sidebar__item}>
                        music
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;

