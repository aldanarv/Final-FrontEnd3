import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import{ useCharContext } from '../Components/utils/global.context';

const Detail = () => {

  const [char, setChar] = useState({})
  const {id} = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/'+id
  useEffect(() => {
    const fetchChar = async () => {
      const res = await axios(url)
      setChar(res.data)
      // axios(url)
      // .then(res => setChar(res.data))
    }
    fetchChar()
  }, [])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist</h1>
      <p>Name: {char.name}</p>
      <p>Email: {char.email}</p>
      <p>Phone: {char.phone}</p>
      <p>Website: {char.website}</p>
    </>
  )
}

export default Detail;