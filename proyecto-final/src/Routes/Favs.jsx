import React from "react";
import Card from "../Components/Card";
import { useCharContext } from "../Components/utils/global.context";
import "../index.css"

const Favs = () => {
  const { state } = useCharContext();

  return (
    <div className= {`${state.theme}`}>
      <h1>Dentists Favorites</h1>
      <div className="card-grid">
      {state.favs.map((character) => (
          <Card
            key={character.id}
            character={character}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;