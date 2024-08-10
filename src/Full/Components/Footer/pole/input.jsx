import styles from "./input.module.css"


export default function Input(props){
    return(
        <>
            <form action="https://api.web3forms.com/submit" method="POST">

                <input type="hidden" name="access_key" value="343878e1-c9ae-4e2b-9d23-0bbde5c07760" />
                <input type="hidden" name="Название формы:" value={props.nameForm} readOnly/>{/* Название формы через props */}
                
                <div className={styles.pole}>
                    <textarea className={styles.massage} placeholder="чем вам помочь?" name="Сообщение:" required></textarea>
                    <input className={styles.final} type="submit" value="Отправить">{/* кнопка отправить */}</input>
                </div>  
            </form>
        </>
    )
}