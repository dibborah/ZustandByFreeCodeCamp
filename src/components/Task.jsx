/* eslint-disable react/prop-types */
import classNames from "classnames";
import "./Task.css";

const Task = ({ title }) => {
    const STATUS = "PLANNED";
  return (
    <div className="task">
      <div>{title}</div>
      <div className="bottomWrapper">
      <div></div>
      <div className={classNames("status", STATUS)}>{STATUS}</div>
      </div>
    </div>
  );
};

export default Task;
