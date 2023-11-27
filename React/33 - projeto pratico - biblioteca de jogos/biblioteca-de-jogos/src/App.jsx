import { useState } from "react";

export default function App() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem('obc-game-lib');
    return storedGames ? JSON.parse(storedGames) : [];
  });
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);

    const newGame = { id, title, cover };

    setGames((state) => {
      const newState = [...state, newGame];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((game) => game.id !== id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    addGame({ title, cover });

    setTitle("");
    setCover("");
  };

  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <form>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input
            type="text"
            name="cover"
            id="cover"
            value={cover}
            onChange={(ev) => setCover(ev.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Adicionar à biblioteca
        </button>
      </form>

      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt={game.title + " cover"} />
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame(game.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}