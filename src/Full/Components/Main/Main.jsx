import { useEffect, useRef } from 'react';
import styles from "./Main.module.css";
import Card from "./MainCard/MainCard";

export default function Main() {
    const wrapperCardRef = useRef(null);

    useEffect(() => {
        if (wrapperCardRef.current) {
            wrapperCardRef.current.scrollLeft = 0;
        }
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <h1 className={styles.textName}>Выберите услугу, которая вам нужна</h1>

                <div 
                    className={styles.wrapperCard}
                    ref={wrapperCardRef}
                >
                    <Card 
                        to="/Page1"
                        name="Программирование"
                        foto="https://i.pinimg.com/564x/d0/67/40/d06740abac6ffc8e0e5f24333ce32b8e.jpg"
                    />

                    <Card 
                        to="/Page2"
                        name="Тренер"
                        foto="https://i.pinimg.com/474x/ad/e9/90/ade9905c1a88a6d40b7c6564860df30f.jpg"
                    />

                    <Card 
                        to="/Page3"
                        name="Фотограф"
                        foto="https://i.pinimg.com/564x/91/77/2e/91772e464c9c44bba97457cfa324715a.jpg"
                    />

                    <Card 
                        to="/Page4"
                        name="Курьер"
                        foto="https://i.pinimg.com/564x/5a/7b/9b/5a7b9bcf2117b3fe9dfa115b271cd235.jpg"
                    />
                </div>

                <p className={styles.textFooter}>ProService соединяет покупателей и исполнителей услуг, делая этот процесс простым и удобным.</p>
            </div>
        </>
    );
}
