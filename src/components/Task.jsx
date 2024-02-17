/* eslint-disable react/prop-types */
import classNames from "classnames";
import "./Task.css";
import { useStore } from "../store";
import Trash from "../assets/trash-2.svg"

const Task = ({ title }) => {
  const tasks = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  return (
    <div className="task" draggable
    onDragStart={()=> setDraggedTask(tasks.title)}
    >
      <div>{tasks.title}</div>
      <div className="bottomWrapper">
        <div onClick={()=>deleteTask(tasks.title)}><img src={Trash}/></div>
        <div className={classNames("status", tasks.state)}>{tasks.state}</div>
      </div>
    </div>
  );
};

export default Task;
