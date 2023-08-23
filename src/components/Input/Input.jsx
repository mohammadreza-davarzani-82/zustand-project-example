import PropTypes from "prop-types";
const Input = ({
  disabled,
  required,
  dir,
  type,
  placeholder,
  label,
  handleChange,
  name,
  value,
  classStyle,
}) => {
  return (
    <>
      {label ? (
        <label className=" flex mx-auto justify-center text-gray-700 text-sm font-bold my-2">
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        name={name}
        value={value}
        disabled={disabled}
        required={required}
        type={type}
        dir={dir}
        id={type}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        className={classStyle}
      />
    </>
  );
};

export default Input;

Input.propTypes = {
  dir: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  classStyle: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
};
