import React from 'react';
import {Link} from 'react-router-dom';
import { useCharContext } from './utils/global.context';
import "../Styles/Navbar.css";
import "../index.css"

const Navbar = () => {

  const {state, dispatch} = useCharContext();
  const changeTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  

  return (
    <nav className={state.theme}>
      <div>
      <img src="./DH.ico" alt='Dh Logo'/>
      <h1 className='odontoTitle'>Odonto</h1>
      </div>
      <div>
      <Link to= '/'><h4>Home</h4></Link>
      <Link to= '/favs'><h4>Favs</h4></Link>
      <Link to= '/contact'><h4>Contact</h4></Link>
      <button onClick={changeTheme} className='themeButton'>🌙</button>
      </div>
    </nav>
  )
}

export default Navbar;