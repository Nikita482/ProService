import styles from "./windowAboutUs.module.css"

import { useState } from "react"


export default function WindowAboutUs(){

    const[state, setState] = useState(false)
    function btnState(){
        setState(!state)
    }

    return(
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperMax}>
                    <h1 className={styles.wrapperName}>О нас</h1>
                    <p className={styles.font2}>Добро пожаловать на ProService! Наша платформа помогает покупателям и исполнителям услуг найти друг друга. Мы делаем поиск и предоставление услуг простыми и удобными.</p>

                    <h2 className={styles.wrapperMargin1}>Как это работает?</h2>
                    <ul className={styles.ul}>
                        <li className={styles.wrapperMargin2}><strong>Для покупателей:</strong>
                            <ul>
                                <li className={styles.font1}>Просматривайте профили.</li>
                                <li className={styles.font1}>Сравнивайте предложения.</li>
                                <li className={styles.font1}>Связывайтесь напрямую с нами.</li>
                            </ul>
                        </li>
                        <li className={styles.wrapperMargin3}><strong>Для исполнителей:</strong>
                            <ul>
                                <li className={styles.font1}>Регистрируйтесь и создавайте профили.</li>
                                <li className={styles.font1}>Получайте заказы.</li>
                            </ul>
                        </li>
                    </ul>

                    <h2 className={styles.wrapperMargin1}>Безопасность и ответственность</h2>
                    <p className={styles.fontDisplay2}>ProService не несет ответственности за качество услуг. Пожалуйста, тщательно проверяйте профили исполнителей, и заключайте все необходимые договоренности перед началом работы.</p>
                    <p className={styles.fontDisplay2_1}>Спасибо, что выбрали ProService! Надеемся, вы найдете нужного исполнителя.</p>
                </div>

                <div className={styles.wrapperMin}>
                    {state === false && (
                        <>
                            <h1 className={styles.wrapperName}>О нас</h1>
                            <p className={styles.font2}>Добро пожаловать на ProService! Наша платформа помогает покупателям и исполнителям услуг найти друг друга. Мы делаем поиск и предоставление услуг простыми и удобными.</p>

                            <h2 className={styles.wrapperMargin1}>Как это работает?</h2>
                            <ul className={styles.ul}>
                                <li className={styles.wrapperMargin2}><strong>Для покупателей:</strong>
                                    <ul>
                                        <li className={styles.font1}>Просматривайте профили.</li>
                                        <li className={styles.font1}>Сравнивайте предложения.</li>
                                        <li className={styles.font1}>Связывайтесь напрямую с нами.</li>
                                    </ul>
                                </li>
                                <li className={styles.wrapperMargin3}><strong>Для исполнителей:</strong>
                                    <ul>
                                        <li className={styles.font1}>Регистрируйтесь и создавайте профили.</li>
                                        <li className={styles.font1}>Получайте заказы.</li>
                                    </ul>
                                </li>
                            </ul>     
                            <button className={styles.btn} onClick={btnState}>Еще</button>      
                        </>
                    )}

                    {state === true && (
                        <>
                            <h2 className={styles.wrapperMargin1Mobil}>Безопасность и ответственность</h2>
                            <p className={styles.text}>ProService не несет ответственности за качество услуг. Пожалуйста, тщательно проверяйте профили исполнителей, и заключайте все необходимые договоренности перед началом работы.</p>
                            <p className={styles.text1}>Спасибо, что выбрали ProService! Надеемся, вы найдете нужного исполнителя.</p>
                            <button className={styles.btn} onClick={btnState}>Назад</button>      
                        </>
                    )}






                </div>
            </div>
        </>
    )
}