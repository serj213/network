import React from "react";
import styles from './profile.module.scss';

import Posts from "../Posts/Posts";

import bg from '../../assets/images/bmw.jpg';
import avatar from '../../assets/images/avatar.jpg';

const Profile = ({profile}) => {

    return (
        <div className={styles.profile}>
            <div className={styles.profile__top}>
                <img src={bg} alt="" />
            </div>

            <div className={styles.info}>
                <div className={styles.info__logo}>
                    <img src={avatar} alt="" />
                </div>

                <div className={styles.info__info}>
                    Sergey Sergey
                </div>
            </div>

            <Posts posts={profile.posts} />
        </div>
    )
}

export default Profile;