import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import{ useCharContext } from '../Components/utils/global.context';
import "../Styles/Detail.css"

const Detail = () => {

  const {id} = useParams()
  const {state, fetchDetailData} = useCharContext();

  useEffect(() => {
    if (id) {
      fetchDetailData(id);
    }
  }, [id]);

  const dentist = state.dentist;

  if (!dentist || Object.keys(dentist).length === 0) {
    return <p className='Detail NotFound'>Dentist Not Found</p>;
  }

  return (
    <div className= {`${state.theme} Detail`}>
      <h1 className='detailTitle'>Detail Dentist</h1>
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  )
}

export default Detail;