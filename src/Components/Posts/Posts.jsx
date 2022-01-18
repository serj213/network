import React from "react";
import ItemPost from "./ItemPost/ItemPost";
import styles from './posts.module.scss';

const Posts = ({ posts }) => {
    return (
        <div className={styles.posts}>

            <h2 className={styles.posts__title}>
                My posts
            </h2>

            <div className={styles.posts__add}>
                <input type="text" placeholder='Your message' />
                <button>
                    Отправить
                </button>
            </div>

            <ul>

                {
                    posts.map((item, index) => {
                        return <ItemPost key={index} ava={item.ava} text={item.text} />
                    })
                }

            </ul>

        </div>
    )
}

export default Posts;