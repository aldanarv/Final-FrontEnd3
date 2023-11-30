import React from 'react'
import Card from '../Components/Card'
import { useCharContext } from '../Components/utils/global.context.jsx'

const Home = () => {
  const {state} = useCharContext()
  return (
    <div>
      {state.list.map(character => <Card icon={'⭐'} character={character} key={character.id}/>)}
    </div>
  )
}

export default Home;