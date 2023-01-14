import styles from "./Task.module.css"
import { CheckSquare, Trash } from "phosphor-react"

const Task = ({isFinished=false, content, onDeleteTask, onSetFinishTask}) =>{

    const handleDeleteTask = () =>{
        onDeleteTask(content)
    }

    const handleFinishTask = () =>{
        onSetFinishTask(content, isFinished)
    }

    return(
        <div className={isFinished ? styles.taskFinished :styles.task}>
           <div className={styles.content} onClick={handleFinishTask}>
            {isFinished ? <CheckSquare size={30} weight="fill"/> : <CheckSquare className={styles.checkout} size={30}/>}
           </div>
            <p>
                {content}
            </p>
            <div onClick={handleDeleteTask}>
                <Trash className={styles.trash} size={30}/>
            </div>
        </div>
    )
}

export default Task