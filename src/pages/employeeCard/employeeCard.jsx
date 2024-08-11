import styles from "./employeeCard.module.css"

import { useState } from "react"

export default function EmployeeCard(props){

    const[card, setCard] = useState('side1')

    function side1(){
        setCard('side1')
    }

    function side2(){
        setCard('side2')
    }

    function side3(){
        setCard('side3')
    }

    return(
        <>
            {card === "side1" &&(
                <>
                    <div className={styles.wrapper}>
                        <div className={styles.cardTop}>
                            <div className={styles.hole}></div>

                            <h1 className={styles.name1}>ProService</h1>
                        </div>

                        <div className={styles.cardCenter}>
                            <img className={styles.foto} src={props.foto} />
                        </div>

                        <div className={styles.cardBottom}>
                                <p className={styles.cardBtmName}>{props.fullName}</p>

                            <div className={styles.boxBtn}>
                                <button className={styles.btnInfo} onClick={side2}>Данные</button>
                                <button className={styles.btnOrder} onClick={side3}>Заказать</button>
                            </div>
                        </div>
                    </div>           
                </>
            )}

            {card === "side2" &&(
                <>
                    <div className={styles.wrapperSide2}>
                        <div className={styles.cardTop}>
                            <div className={styles.hole}></div>

                            <h1 className={styles.name1}>ProService</h1>
                        </div>

                        <div className={styles.wrapperText}>
                            <p className={styles.info}>ФИО: {props.fullName}</p>
                            <p className={styles.info}>Должность: {props.role}</p>
                            <p className={styles.info}>Возраст: {props.age} лет</p>
                            <p className={styles.info}>Навыки: {props.skills}</p>
                            <p className={styles.info}>дни работы: {props.schedule}</p>
                            <p className={styles.info}>время работы: {props.timeSchedule}</p>
                            <p className={styles.info}>Город: {props.city}</p>
                        </div>

                        <div className={styles.boxBtnSide2}>
                            <button className={styles.btnBackSide2} onClick={side1}>Назад</button>
                            <button className={styles.btnOrderSide2} onClick={side3}>Заказать</button>
                        </div>
                    </div> 
                </>
            )}

            {card === "side3" &&(
                <>
                    <div className={styles.wrapperSide3}>
                        <div className={styles.cardTop}>
                            <div className={styles.hole}></div>

                            <h1 className={styles.name1}>ProService</h1>
                        </div>

                        <div className={styles.wrapperText}>
                            <form className={styles.form} action="https://api.web3forms.com/submit" method="POST">

                                <input type="hidden" name="access_key" value="343878e1-c9ae-4e2b-9d23-0bbde5c07760" />
                                <input type="hidden" name="Название формы:" value="Карточка работника" readOnly/>
                                <input type="hidden" name="Заказ на работника:" value={props.fullName} readOnly/>

                                <div className={styles.pole}>
                                    <label className={styles.label}>Имя:</label>
                                    <input className={styles.name} type="text" name='имя:' required />
                                </div>

                                <div className={styles.pole}>
                                    <label className={styles.label}>email:</label>
                                    <input className={styles.email} type="email" name='Email' required />
                                </div>

                                <div className={styles.pole}>
                                    <label className={styles.label}>Номер:</label>
                                    <input className={styles.tel} type="tel" name='Номер телефона:' required />
                                </div>   

                                <div className={styles.pole}>
                                    <label className={styles.label}>Сообщение:</label>
                                    <textarea className={styles.massage} placeholder={props.placeholder} name="Сообщение:" required></textarea>
                                </div>  

                                <div>
                                    <input type="submit" value="Отправить" className={styles.final}></input>
                                    <button className={styles.back} onClick={side1}>Назад</button>
                                </div>


                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}