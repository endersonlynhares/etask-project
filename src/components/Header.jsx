import styles from "./Header.module.css"
import {CheckSquareOffset} from "phosphor-react"

const Header = () =>{
    return(
         <header className={styles.header}>
            <div className={styles.logo}>
                <CheckSquareOffset size={75} weight="bold" />
                <span>E<span style={{color: "var(--cian-500)"}}>TASK</span></span>
            </div>
         </header>
    )
}

export default Header