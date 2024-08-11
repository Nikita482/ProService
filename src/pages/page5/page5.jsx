import styles from "./page5.module.css"

// import { Link } from 'react-router-dom'




// export default function Page5(){
//     return(
//         <>
//             <h1>Page 5</h1>
//             <Link to="/">home</Link>


            
//       </>
//     )
// }

import React, { useRef } from 'react';

function Page5() {
    const wrapperCardRef = useRef(null);

    const scrollLeft = () => {
        if (wrapperCardRef.current) {
            wrapperCardRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (wrapperCardRef.current) {
            wrapperCardRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.textName}>Выберите услугу, которая вам нужна</h1>

            <div 
                className={styles.wrapperCard}
                ref={wrapperCardRef}
            >
                <div className={styles.card}>
                    <img 
                        src="https://i.pinimg.com/564x/d0/67/40/d06740abac6ffc8e0e5f24333ce32b8e.jpg" 
                        alt="Программирование" 
                        className={styles.cardImage} 
                    />
                    <p className={styles.cardName}>Программирование</p>
                </div>
                <div className={styles.card}>
                    <img 
                        src="https://i.pinimg.com/474x/ad/e9/90/ade9905c1a88a6d40b7c6564860df30f.jpg" 
                        alt="Тренер" 
                        className={styles.cardImage} 
                    />
                    <p className={styles.cardName}>Тренер</p>
                </div>
                <div className={styles.card}>
                    <img 
                        src="https://i.pinimg.com/474x/ad/e9/90/ade9905c1a88a6d40b7c6564860df30f.jpg" 
                        alt="Тренер" 
                        className={styles.cardImage} 
                    />
                    <p className={styles.cardName}>Тренер</p>
                </div>
                <div className={styles.card}>
                    <img 
                        src="https://i.pinimg.com/474x/ad/e9/90/ade9905c1a88a6d40b7c6564860df30f.jpg" 
                        alt="Тренер" 
                        className={styles.cardImage} 
                    />
                    <p className={styles.cardName}>Тренер</p>
                </div>
                <div className={styles.card}>
                    <img 
                        src="https://i.pinimg.com/474x/ad/e9/90/ade9905c1a88a6d40b7c6564860df30f.jpg" 
                        alt="Тренер" 
                        className={styles.cardImage} 
                    />
                    <p className={styles.cardName}>Тренер</p>
                </div>
                <div className={styles.card}>
                    <img 
                        src="https://i.pinimg.com/564x/91/77/2e/91772e464c9c44bba97457cfa324715a.jpg" 
                        alt="Фотограф" 
                        className={styles.cardImage} 
                    />
                    <p className={styles.cardName}>Фотограф</p>
                </div>
                <div className={styles.card}>
                    <img 
                        src="https://i.pinimg.com/564x/5a/7b/9b/5a7b9bcf2117b3fe9dfa115b271cd235.jpg" 
                        alt="Курьер" 
                        className={styles.cardImage} 
                    />
                    <p className={styles.cardName}>Курьер</p>
                </div>
            </div>

            <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={scrollLeft}>
                &lt;
            </div>
            <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={scrollRight}>
                &gt;
            </div>

            <p className={styles.textFooter}>
                ProService соединяет покупателей и исполнителей услуг, делая этот процесс простым и удобным.
            </p>
        </div>
    );
}

export default Page5;

