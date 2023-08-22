import classNames from "classnames";
import "./Task.css";
import PropTypes from "prop-types";
import { useStore } from "../../zustand/store";
const Task = ({ title }) => {
    const  task = useStore((store)=>
    store.tasks.find((task)=> task.title == title)
    ) 
  return (
    <div className="task">
      <header>
        <div> {task.title}</div>
      </header>
      <div className="bottom-wrapp">
        <div></div>
        <div className={classNames("status",task.state)}>{task.state}</div>

      </div>
    </div>
  );
};

export default Task;

Task.propTypes = {
  title: PropTypes.any,
};
