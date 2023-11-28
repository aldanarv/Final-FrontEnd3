import React from 'react'
import Card from '../Components/Card'
import { useCharContext } from '../Components/utils/global.context.jsx'

const Home = () => {
  const {state, dispatch} = useCharContext();
  const {list} = state;
  if (!list) {
    return null;
  }

  const addToFavorites = (character) => {
    dispatch({type: 'ADD_FAV', payload: character})
  }
  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.list.map(character => <Card character={character} key={character.id} addToFavorites={() => addToFavorites(character)}/>)}
      </div>
    </main>
  )
}

export default Home;