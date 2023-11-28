import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import{ useCharContext } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { id } = useParams();
  const { state, getDentistDetails } = useCharContext();

  useEffect(() => {
    getDentistDetails(id);
  }, [id, getDentistDetails]);

  const { dentist } = state;
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist</h1>
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </>
  )
}

export default Detail;