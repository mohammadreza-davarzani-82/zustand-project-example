import { useStore } from "../../zustand/store";
import PropTypes from "prop-types";
import Task from "../Task/Task";
import "./Column.css";

const Column = ({ state }) => {
  const tasks = useStore(
    (store) => console.log(store.task),
  );
  console.log(tasks)
  return (
    <div className="column">
      <p>{state}</p>
      {/* {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))} */}
    </div>
  );
};

export default Column;

Column.propTypes = {
  state: PropTypes.any,
};
