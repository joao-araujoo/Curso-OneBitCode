import PropTypes from "prop-types";

Game.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default function Game({ title, cover, onRemove }) {
  return (
    <div>
      <img src={cover} alt={title + " Cover"} />
      <div>
        <h2>{title}</h2>
        <button onClick={onRemove}>Remover</button>
      </div>
    </div>
  );
}