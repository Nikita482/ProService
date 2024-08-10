import styles from "./window.module.css"


export default function Window(props){
    return(
        <>
            <div className={styles.wrapper}>
                <form className={styles.form} action="https://api.web3forms.com/submit" method="POST">

                    <input type="hidden" name="access_key" value="343878e1-c9ae-4e2b-9d23-0bbde5c07760" />
                    <input type="hidden" name="Название формы:" value={props.nameForm} readOnly/>
                    <p className={styles.nameForm}>{props.nameForm}</p>

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

                    <input type="submit" value="Отправить" className={styles.final} ></input>

                </form>
            </div>
        </>
    )
}