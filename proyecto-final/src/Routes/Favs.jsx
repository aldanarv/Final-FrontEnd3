import React from "react";
import Card from "../Components/Card";
import { useCharContext } from "../Components/utils/global.context";

const Favs = () => {
  const { state, removeFromFavorites } = useCharContext();
  const { favs } = state;

  return (
    <div className={state.theme ? 'light' : 'dark'}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {state.favs.map((character) => (
          <Card
            key={favs.id}
            character={character}
            removeFromFavorites={() => removeFromFavorites(character)}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;