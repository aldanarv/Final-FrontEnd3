import React from 'react';
import {Link} from 'react-router-dom';
import { useCharContext } from './utils/global.context';

const Navbar = () => {

  const {state, changeTheme} = useCharContext()

  return (
    <nav className={state.theme ? 'light' : 'dark'}>
      <h1>DH Odonto</h1>
      <div>
      <Link to= '/'><h4>Home</h4></Link>
      <Link to= '/favs'><h4>Favs</h4></Link>
      <Link to= '/contact'><h4>Contact</h4></Link>
      <button onClick={changeTheme} className='themeButton'>🔅</button>
      </div>
    </nav>
  )
}

export default Navbar;