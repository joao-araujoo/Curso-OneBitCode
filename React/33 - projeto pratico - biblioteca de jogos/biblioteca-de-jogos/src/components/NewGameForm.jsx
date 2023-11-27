import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

NewGameForm.propTypes = {
  addGame: PropTypes.func.isRequired,
};

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    addGame({ title, cover });

    setTitle("");
    setCover("");
  };

  return (
    <form>
      <TextInput
        id="title"
        labelText="Título:"
        value={title}
        setValue={setTitle}
      />
      <TextInput
        id="cover"
        labelText="Capa:"
        value={cover}
        setValue={setCover}
      />
      <button type="submit" onClick={handleSubmit}>
        Adicionar à biblioteca
      </button>
    </form>
  );
}
