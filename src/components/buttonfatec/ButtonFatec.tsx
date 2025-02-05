import './ButtonFatec.css'
import styles from './ButtonFatec.module.css'

interface Props {

    type: 'submit' | 'button' | 'reset'
    label: string
}

function ButtonFatec({type,label}:Props){
    return(
        <button className={styles.buttonFatec} type={type}>{label}</button>

    )

}


export default ButtonFatec