import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{

    const localStorageData = JSON.parse(localStorage.getItem('favs')) || [];

    const isCardInLocalStorage = localStorageData.some((card) => card.id === id);

    if (!isCardInLocalStorage) {
      const updatedLocalStorageData = [...localStorageData, { id, name, username }];
      localStorage.setItem('favs', JSON.stringify(updatedLocalStorageData));
    }
  }

  return (
    <div className="card">
      <img src= {`../../public/images/doctor.jpg`} alt={'Imagen de ${name}'}/>
      <h3>{name}</h3>
      <p>{username}</p>
      <p>Id:{id}</p>
      <button onClick={addFav} className="favButton">Add fav</button>
      <Link to={'/detail/${id}'}>Ver detalle</Link>
    </div>
  );
};

export default Card;