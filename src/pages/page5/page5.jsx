import styles from "./page5.module.css"

import { Link } from 'react-router-dom'




export default function Page5(){
    return(
        <>
            <h1>Page 5</h1>
            <Link to="/">home</Link>

            <div className={styles.fixedElement}>Fixed Element</div>
            <div className={styles.spacer}></div>
      </>
    )
}