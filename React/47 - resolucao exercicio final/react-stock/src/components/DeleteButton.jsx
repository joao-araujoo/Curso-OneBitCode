import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useStock from "../hooks/useStock";

DeleteButton.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
};

export default function DeleteButton({ itemName, itemId }) {
  const { deleteItem } = useStock();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm(`Tem certeza de que deseja excluir ${itemName}?`)) {
      deleteItem(itemId);
      navigate("/items");
    }
  };

  return (
    <button className="button is-danger is-small" onClick={handleDelete}>
      Excluir
    </button>
  );
}
