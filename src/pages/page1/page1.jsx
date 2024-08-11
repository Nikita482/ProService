import styles from "./page1.module.css"

import { Link } from 'react-router-dom'

import HeaderPage from "../header/Header"
import EmployeeCard from "../employeeCard/employeeCard"


export default function Page1(){
    return(
        <>
            <HeaderPage />

            <div className={styles.wrapper}>
                <EmployeeCard fullName = "Александр Иванович Смирнов"
                    foto = "https://i.pinimg.com/474x/a1/92/82/a19282a527e48c193d328b77f8816613.jpg"
                    role = "Авто механик"
                    age = "28"
                    skills = "диагностика и ремонт автомобилей"
                    schedule = "пн-пт"
                    timeSchedule = "с 9:00 до 18:00"
                    city = "Москва"
                />

                <EmployeeCard fullName = "Елена Сергеевна Петрова"
                    foto = "https://i.pinimg.com/474x/a1/92/82/a19282a527e48c193d328b77f8816613.jpg"
                />

                <EmployeeCard fullName = "Елена Сергеевна Петрова"
                    foto = "https://i.pinimg.com/474x/a1/92/82/a19282a527e48c193d328b77f8816613.jpg"
                />
            </div>      

      
      </>
    )
}