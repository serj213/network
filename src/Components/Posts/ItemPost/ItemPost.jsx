import React from "react";
import styles from './itemPost.module.scss';

const ItemPost = ({ava, text}) => {
    return (
        <li className={styles.item}>
            <img src={ava} alt="" />
            <span>
                {text}
            </span>
        </li>
    )
}

export default ItemPost;