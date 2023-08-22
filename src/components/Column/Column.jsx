import { useStore } from "../../zustand/store";
import PropTypes from "prop-types";
import Task from "../Task/Task";
import "./Column.css";

const Column = ({ state }) => {
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );
  const addTask = useStore((store) => store.addTask)
  return (
    <div className="column">
      <header className="title-wrapp">
        <p>{state}</p>
        <button onClick={()=>addTask("learn zustand" , state)}>Add</button>
      </header>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
};

export default Column;

Column.propTypes = {
  state: PropTypes.any,
};
