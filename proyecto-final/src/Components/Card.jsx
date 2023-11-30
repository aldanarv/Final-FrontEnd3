import React from "react";
import { Link } from "react-router-dom";
import { useCharContext } from "./utils/global.context";


const Card = ({ character }) => {
  
  const {state, dispatch } = useCharContext();

  const findFav = state.favs.find(fav => fav.id == character.id)

  const addFav = ()=>{

    if(findFav){
      alert('Ya agregaste ese elemento a favoritos')
    } else {
      dispatch({type: 'ADD_FAV', payload: character})
      localStorage.setItem('favs', JSON.stringify(state.favs))
    }
  }

  return (
    <div className="card">
      <Link to={'/detail/'+character.id}>
        <img src= {`../../images/doctor.jpg`} alt={'Imagen de ${name}'}/>
        <h3>{character.name}</h3>
        <p>{character.username}</p>
      </Link>
      <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;