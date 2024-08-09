import styles from "./MainCard.module.css"

import { Link } from "react-router-dom"



export default function Card(props){
    return(
        <>
            {/* <Link to={props.to} className={styles.Link}>
                <img src={props.foto} className={styles.foto}/>
                <p className={styles.name}>{props.name}</p>
            </Link> */}

            <div className={styles.wrapper}>
                <Link to={props.to} className={styles.Link}></Link>
                <img className={styles.foto} src={props.foto} />
                <p className={styles.name}>{props.name}</p>
            </div>
        </>
    )
}