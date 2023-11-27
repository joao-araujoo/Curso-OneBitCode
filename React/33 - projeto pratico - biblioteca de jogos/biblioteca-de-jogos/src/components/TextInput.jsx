import PropTypes from "prop-types";

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
}

export default function TextInput({ id, labelText, value, setValue }) {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
  );
}
