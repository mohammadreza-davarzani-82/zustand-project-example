import { useStore } from "../../zustand/store";
import { useState } from "react";
import PropTypes from "prop-types";
import Task from "../Task/Task";
import "./Column.css";
import Modal from "../Modal/Modal";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import classNames from "classnames";
const Column = ({ state }) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );
  const addTask = useStore((store) => store.addTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = () => {
    addTask(value, state);
    setOpen(false);
    setValue("");
  };
  const handleDrag = (e, bool) => {
    console.log(bool);
    setDrop(bool);
    e.preventDefault();
  };
  const handleDrop = () => {
    setDraggedTask(null), moveTask(draggedTask, state);
    setDrop(false)
  };

  return (
    <div
      className={classNames("column", { drop: drop })}
      onDragOver={(e) => handleDrag(e, true)}
      onDragLeave={(e) => handleDrag(e, false)}
      onDrop={handleDrop}
    >
      <header className="title-wrapp">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </header>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
      <Modal showModal={open} handleClose={setOpen}>
        <AddTodoForm handleSubmit={handleSubmit} handleChange={handleChange} />
      </Modal>
    </div>
  );
};

export default Column;

Column.propTypes = {
  state: PropTypes.any,
};
