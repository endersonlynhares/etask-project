import styles from "./ContentTask.module.css";
import { PlusCircle } from "phosphor-react";
import Task from "./Task";
import { useState } from "react";
import { useForm } from "react-hook-form";


const ContentTask = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: "Concluir o modulo 1 do curso de TypeScript",
      isFinished: false,
    },
    {
      id: 2,
      content: "Concluir o curso de HTML/CSS do Guanabara ",
      isFinished: true,
    },
    {
      id: 3,
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus recusandae.",
      isFinished: false,
    },
  ]);

  const { register, handleSubmit } = useForm();

  const OnSubmit = (data) => {
    setTasks([{ content: data.task, isFinished: false }, ...tasks]);
  };

  const onDeleteTask = (content) => {
    const newTasks = tasks.filter((task) => task.content != content);
    setTasks(newTasks);
  };

  const onSetFinishTask = (content, isFinished) => {
    const tasksWithoutAlteration = tasks.filter(
      (task) => task.content !== content
    );
    const taskAltered = {
      content: content,
      isFinished: !isFinished,
    };
    const allTasks = [taskAltered, ...tasksWithoutAlteration];
    setTasks(allTasks);
  };

  const countTaskFinished = tasks.filter((task) => task.isFinished).length;
  const countTask = tasks.length;

  return (
    <div className={styles.contentTask}>
      <form className={styles.taskArea} onSubmit={handleSubmit(OnSubmit)}>
        <input type={"text"} required {...register("task", { required: true })} />
        <button type="submit">
          <PlusCircle size={30} />
        </button>
      </form>

      <div className={styles.info}>
        <strong>
          Tarefas Criadas: <span className={styles.bunge}>{countTask}</span>
        </strong>
        <strong>
          Tarefas Finalizadas{" "}
          <span className={styles.bunge}>
            {" "}
            {countTaskFinished} de {countTask}{" "}
          </span>
        </strong>
      </div>

      <div className={styles.groupTask}>
        {tasks
          .filter((task) => !task.isFinished)
          .map((task) => {
            return (
              <Task
                key={task.content}
                content={task.content}
                isFinished={task.isFinished}
                onSetFinishTask={onSetFinishTask}
                onDeleteTask={onDeleteTask}
              />
            );
          })}

        {tasks
          .filter((task) => task.isFinished)
          .map((task) => {
            return (
              <Task
                key={task.content}
                content={task.content}
                isFinished={task.isFinished}
                onDeleteTask={onDeleteTask}
                onSetFinishTask={onSetFinishTask}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ContentTask;
