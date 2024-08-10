import styles from "./page1.module.css"

import { Link } from 'react-router-dom'

import HeaderPage from "../header/Header"


export default function Page1(){
    return(
        <>
            <HeaderPage />

            <div className={styles.wrapper}>
                <h1>sds</h1>
            </div>            
      </>
    )
}