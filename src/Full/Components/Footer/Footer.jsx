import styles from "./Footer.module.css"

import Input from "./pole/input"

export default function Footer(){
    return(
        <>
            <div className={styles.wrapper}>
                <Input nameForm = "Вопрос"/>

                <div className={styles.blockInfo}>
                    <div className={styles.messengersMedia}>
                        <div className={styles.vkMedia}>VK</div>
                        <div className={styles.instMedia}>Inst</div>
                        <div className={styles.tgMedia}>Tgk</div>
                    </div>  
                    <div className={styles.media}>
                        <div className={styles.addresses}>
                            <h2>Контактноя информация</h2>
                            <p className={styles.fontSize}>contact@proservice.ru</p>
                            <p className={styles.fontSize1}>+7 (495) 123-45-67</p>
                        </div>

                        <div className={styles.text}>
                            <h1>О сайте:</h1>
                            <p className={styles.fontSize}>ProService предоставляет широкий спектр услуг для бизнеса и частных лиц, включая консалтинг, техническую поддержку и индивидуальные решения. Мы стремимся к качеству и инновациям, чтобы удовлетворить потребности наших клиентов.</p>
                        </div>
                    </div>

                    <div className={styles.messengers}>
                        <div className={styles.vk}>VK</div>
                        <div className={styles.inst}>Inst</div>
                        <div className={styles.tg}>Tgk</div>
                    </div>  
                </div>
            </div>
        </>
    )
}