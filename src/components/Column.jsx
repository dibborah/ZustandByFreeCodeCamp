import "./Column.css";
import Task from "./Task";

// eslint-disable-next-line react/prop-types
const Column = ({ state }) => {
  return (
    <div className="column">
      <p>{state}</p>
      <Task title="Todo"/>
    </div>
  );
};

export default Column;
