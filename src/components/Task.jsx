/* eslint-disable react/prop-types */
import classNames from "classnames";
import "./Task.css";
import { useStore } from "../store";

const Task = ({ title }) => {
  const tasks = useStore((store)=> 
  store.tasks.find((task)=> task.title === title)
  )
  return (
    <div className="task">
      <div>{tasks.title}</div>
      <div className="bottomWrapper">
      <div></div>
      <div className={classNames("status", tasks.state)}>{tasks.state}</div>
      </div>
    </div>
  );
};

export default Task;
