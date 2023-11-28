import React from "react";
import {useState} from 'react';
import { useCharContext } from "./utils/global.context";

const Form = () => {
  const {state, dispatch} = useCharContext();
  const {form} = state;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FORM_FIELD", field: name, value });
  };

  //const handleSubmit = (e) => {
   // e.preventDefault();
    // Realizar validaciones del formulario aquí antes de enviar
    // ...

    // Marcar el formulario como enviado
    //dispatch({ type: "SUBMIT_FORM" });
  //};

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        Nombre completo:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default Form;