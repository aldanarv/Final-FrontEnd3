import React from "react";
import { Link} from "react-router-dom";
import { useCharContext } from "./utils/global.context";
import "../Styles/Card.css"
import "../index.css"


const Card = ({ character }) => {
  
  const {state, dispatch } = useCharContext();

  const findFav = state.favs.find(fav => fav.id == character.id)

  const addFav = ()=>{

    if(findFav){
      dispatch({type: 'DELETE_FAV', payload: character})
      localStorage.setItem('favs', JSON.stringify(state.favs))
    } else {
      alert('Agregaste este odontólogo a favoritos')
      dispatch({type: 'ADD_FAV', payload: character})
      localStorage.setItem('favs', JSON.stringify(state.favs))
      console.log('Odontólogo:', state.favs);
    }
  }

  return (
    <div className= {`${state.theme} card`}>
      <Link to={'/detail/'+character.id}>
        <img src= {`../../images/doctor.jpg`} alt={'Imagen odontólogo'}/>
        <h3>{character.name}</h3>
        <p>{character.username}</p>
      </Link>
      <button onClick={addFav} className={`favButton ${findFav ? "favorited" : ""}`}>
          {findFav ? "🧡" : "💙"}</button>
    </div>
  );
};

export default Card;