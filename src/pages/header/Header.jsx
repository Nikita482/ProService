import styles from "./Header.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"

import Window from "./window/window"
import WindowAboutUs from "./windowAboutUs/windowAboutUs"

export default function HeaderPage(){

    const[menu, setMenu] = useState(false)
    function btnMenu(){
        setMenu(!menu)
    }
    

    const[windowSupport, setWindowSupport] = useState(true)
    function Support(){
        setWindowSupport(!windowSupport)
        setWindowsearchWorker(true)
        setWindowWorker(true)
        setWindowAboutUs(true)
    }

    const[windowAboutUs, setWindowAboutUs] = useState(true)
    function AboutUs(){
        setWindowAboutUs(!windowAboutUs)
        setWindowSupport(true)
        setWindowsearchWorker(true)
        setWindowWorker(true)
    }

    const[windowWorker, setWindowWorker] = useState(true)
    function Worker(){
        setWindowWorker(!windowWorker)
        setWindowAboutUs(true)
        setWindowSupport(true)
        setWindowsearchWorker(true)
    }

    const[windowsearchWorker, setWindowsearchWorker] = useState(true)
    function searchWorker(){
        setWindowsearchWorker(!windowsearchWorker)
        setWindowWorker(true)
        setWindowAboutUs(true)
        setWindowSupport(true)
    }



    return(
        <>
            <div className={styles.wrapper}> 
                <h1 className={styles.name}>ProService</h1>

                <div className={styles.btns}>
                    <Link to="/" className={styles.btn3}>Назад</Link>
                    <button className={styles.btn1} onClick={Support}>Тех поддержка</button>
                    <button className={styles.btn2} onClick={AboutUs}>О нас</button>
                    <button className={styles.btn4} onClick={Worker}>Стать работником</button>
                    <button className={styles.mainBtn} onClick={searchWorker}>Найти работника</button>
                </div>

                <div className={styles.menu}>
                    <Link to="/" className={styles.menuHome}><img src="https://i.pinimg.com/474x/c9/6e/af/c96eaf4f09b3881c0d35e986e964c268.jpg"/></Link>

                    <div className={styles.btnMenu} onClick={btnMenu}>☰</div>
                </div>
            </div>

            {menu === true && (
                <>
                    <div className={styles.btnsMeta}>
                        <button className={styles.btnMetaTop} onClick={Support}>Тех поддержка</button>
                        <button className={styles.btnMeta1} onClick={AboutUs}>О нас</button>
                        <button className={styles.btnMeta3} onClick={Worker}>Стать работником</button>
                        <button className={styles.mainBtnMeta} onClick={searchWorker}>Найти работника</button>
                    </div>                
                </>
            )}

            {menu === false && (
                <>
                    
                </>
            )}


            <div className={windowSupport ? styles.wrapperOpen : styles.wrapperClosed}>
                <Window nameForm = 'Тех поддержка' placeholder = 'Связь с нами'/>
                <button className={styles.btnWindow} onClick={() => setWindowSupport(!windowSupport)}>Закрыть</button>
            </div>

            <div className={windowAboutUs ? styles.wrapperOpen : styles.wrapperClosed}>
                <WindowAboutUs/>
                <button className={styles.btnWindow1} onClick={() => setWindowAboutUs(!windowAboutUs)}>Закрыть</button>
            </div>

            <div className={windowWorker ? styles.wrapperOpen : styles.wrapperClosed}>
                <Window nameForm = 'Стать работником' placeholder = 'Напишите про свои: Коммуникационные навыки, пол, возраст, цели, зп, график, умение работать в команде, технические навыки, учебные способности и тд'/>
                <button className={styles.btnWindow} onClick={() => setWindowWorker(!windowWorker)}>Закрыть</button>
            </div>

            <div className={windowsearchWorker ? styles.wrapperOpen : styles.wrapperClosed}>
                <Window nameForm = 'Найти работника' placeholder = 'Уточните какого работника вы хотите найти'/>
                <button className={styles.btnWindow} onClick={() => setWindowsearchWorker(!windowsearchWorker)}>Закрыть</button>
            </div>

            

            

        </>
    )
}