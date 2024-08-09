import styles from "./MainService.module.css"

import { Link } from "react-router-dom"


export default function MainService(){
    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.name}>Все услуги</h1>

                <div className={styles.boxLinks}>
                    <Link to='/Page5' className={styles.Link1}><div className={styles.text}>Уборка и клининг</div></Link>
                    <Link to='/Page6' className={styles.Link2}><div className={styles.text}>Ремонт бытовой техники</div></Link>
                    <Link to='/Page7' className={styles.Link3}><div className={styles.text}>Садоводство и уход за растениями</div></Link>
                    <Link to='/Page8' className={styles.Link4}><div className={styles.text}>Установка и монтаж мебели</div></Link>
                    <Link to='/Page9' className={styles.Link5}><div className={styles.text}>Повар</div></Link>
                    <Link to='/Page10' className={styles.Link6}><div className={styles.text}>Уход за домашними животными</div></Link>
                </div>

            </div>
        </>
    )
}