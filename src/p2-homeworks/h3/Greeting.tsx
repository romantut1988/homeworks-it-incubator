import React, {ChangeEvent} from 'react'
import styles from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (setName: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? styles.error : '' // need to fix with (?:)
    const errorClass = error !== '' ? styles.errorText : ''

    return (
        <div className={styles.wrapper}>
            <div className={styles.columns}>
                <input value={name} onChange={setNameCallback} className={styles.inputClass + ' ' + inputClass}/>
                <span className={errorClass}>{error}</span>
            </div>
            <div>
                <button className={styles.button} onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting