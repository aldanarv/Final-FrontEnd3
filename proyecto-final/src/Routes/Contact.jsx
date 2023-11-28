import React, { useEffect } from 'react'
import { useCharContext } from '../Components/utils/global.context';
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {state, dispatch} = useCharContext();
  const {form} = state;

  useEffect(() => {
    console.log('Contacto:', state.list);
  }, [state.list]);

  const handleFormSubmit = (formData) => {
    // Lógica para manejar el envío del formulario desde el componente Contact
    console.log('Datos del formulario desde Contact:', formData);

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
      <h2>Contacto</h2>
      {form.submitted ? (
        <div>
          <p>
            Gracias {form.name}, te contactaremos pronto vía email.
          </p>
        </div>
      ) : (
        <Form />
      )}
    </div>
  )
}}

export default Contact;