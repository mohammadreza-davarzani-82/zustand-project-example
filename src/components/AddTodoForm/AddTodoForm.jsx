import Input from "../Input/Input";
import PropTypes from "prop-types";
import "./AddTodoForm.css"
const AddTodoForm = ({value , handleChange,handleSubmit}) => {
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          type="text"
          placeholder="Writing new task:"
          name="name"
          value={value}
        />
        <button>
            sumbit
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;

AddTodoForm.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,


  };
  