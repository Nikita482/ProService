import styles from "./Main.module.css"

import Card from "./MainCard/MainCard"


export default function Main(){
    return(
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.textName}>Выберите услугу которая вам нужна</h1>

                <div className={styles.wrapperCard}>
                    <Card 
                        to = "/Page1"
                        name = "Прогромирование"
                        foto = "https://i.pinimg.com/564x/d0/67/40/d06740abac6ffc8e0e5f24333ce32b8e.jpg"
                    />

                    <Card 
                        to = "/Page2"
                        name = "Прогромирование"
                        foto = "https://i.pinimg.com/564x/d0/67/40/d06740abac6ffc8e0e5f24333ce32b8e.jpg"
                    />

                    <Card 
                        to = "/Page1"
                        name = "Прогромирование"
                        foto = "https://i.pinimg.com/564x/d0/67/40/d06740abac6ffc8e0e5f24333ce32b8e.jpg"
                    />

                    <Card 
                        to = "/Page1"
                        name = "Прогромирование"
                        foto = "https://i.pinimg.com/564x/d0/67/40/d06740abac6ffc8e0e5f24333ce32b8e.jpg"
                    />
                </div>

                <p className={styles.textFooter}>ProService соединяет покупателей и исполнителей услуг, делая этот процесс простым и удобным.</p>
            </div>
        </>
    )
}