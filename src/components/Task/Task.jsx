import { useStore } from "../../zustand/store";
import { Icon } from '@iconify/react';
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Task.css";

const Task = ({ title }) => {
    const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const setDraggedTask = useStore((store)=>store.setDraggedTask)
  const deleteTask = useStore((store)=>store.deleteTask)
  return (
    <div className="task" draggable onDragStart={()=>setDraggedTask(task.title)}>
      <header>
        <div> {task.title}</div>
      </header>
      <div className="bottom-wrapp">
        <button onClick={()=>deleteTask(title)} className="delete-icon">
          <Icon icon="entypo:trash" width="20" height="20" />
        </button>
        <div className={classNames("status",task.state)}>{task.state}</div>

      </div>
    </div>
  );
};

export default Task;

Task.propTypes = {
  title: PropTypes.any,
};
