import { useStore } from "../../zustand/store";
import React, {useState} from "react";
import PropTypes from "prop-types";
import Task from "../Task/Task";
import "./Column.css";
import Modal from "../Modal/Modal";
const Column = ({ state }) => {
  const [value , setValue] = useState("")
  const [open , setOpen] = useState("")

  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );
  const addTask = useStore((store) => store.addTask(value,state))

 const  handleChange = (e) =>{
    setValue(e.target.value)
  }
  return (
    <div className="column">
      <header className="title-wrapp">
        <p>{state}</p>
        <button onClick={()=>setOpen(true)}>Add</button>
      </header>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
      <Modal handleChange={handleChange} showModal={open} handleClose={setOpen}>

      </Modal>
    </div>
  );
};

export default Column;

Column.propTypes = {
  state: PropTypes.any,
};
