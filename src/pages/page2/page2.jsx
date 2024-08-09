import styles from "./page2.module.css"

import { Link } from 'react-router-dom'



export default function Page2(){
    return(
        <>
            <h1>Page 2</h1>
            <Link to="/">home</Link>
            <div className={styles.wrapper}>
            <div className={styles.wrapperCard}>
                {/* Ваши карточки */}
                <div className={styles.card}>Элемент 1</div>
                <div className={styles.card}>Элемент 2</div>
                <div className={styles.card}>Элемент 3</div>
                <div className={styles.card}>Элемент 4</div>
                <div className={styles.card}>Элемент 5</div>
                <div className={styles.card}>Элемент 6</div>
                <div className={styles.card}>Элемент 7</div>
                <div className={styles.card}>Элемент 8</div>
            </div>
            <div className={styles.scrollHint}>Прокрутите вправо для больше контента</div>
        </div>
        </>
    )
}