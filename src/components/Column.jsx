import { useMemo } from "react";
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";

/* eslint-disable react/prop-types */
const Column = ({ state }) => {
  const tasks = useStore((store) => {
    store.tasks; //.filter((task) => task.state === state);
  });
  // const filter = useMemo(
  //   () => tasks.filter((task) => task.state === state),
  //   [tasks, state]
  // );
  return (
    <div className="column">
      <p>{state}</p>
      <Task title="Todo" />
    </div>
  );
};

export default Column;
