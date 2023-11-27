import { useState } from "react";

export default function useGameCollection() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib");
    return storedGames ? JSON.parse(storedGames) : [];
  });

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

  return { games, addGame, removeGame }
}
