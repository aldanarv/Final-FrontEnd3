import React from "react";
import Card from "../Components/Card";
import { useCharContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, removeFromFavorites } = useCharContext();
  const { favs } = state;

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favs.map((character) => (
          <Card
            key={character.id}
            character={character}
            removeFromFavorites={() => removeFromFavorites(character)}
            isFavorite={true}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;