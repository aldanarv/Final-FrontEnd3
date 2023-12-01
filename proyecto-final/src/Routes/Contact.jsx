import React from 'react'
import Form from '../Components/Form.jsx';
import { useCharContext } from '../Components/utils/global.context.jsx';
import "../Styles/Contact.css"

const Contact = () => {

  const {state} = useCharContext();

  return (
    <div className= {`${state.theme} contact`}>
      <h2 className='text'>Want to know more?</h2>
      <p className='text'>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact;