import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../Styles/Form.css"

const Form = () => {
  const [form, setForm] = useState(false);
  const [fullName, setFullName] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const submit = (data) => {
    setForm(true);
    setFullName(data.fullName);
  };

  const resetForm = () => {
    setForm(false);
    setFullName("");
    reset();
  }

  return (
    <div>
      {form ? (
        <div>
          <h3>{`Gracias ${fullName}, te contactaremos cuanto antes vía email.`}</h3>
          <div>
            <button onClick={resetForm}>Volver al formulario</button>
          </div>
        </div>
      ) : (
        <form onSubmit ={handleSubmit(submit)}>
          <label>
            Nombre:
            <input
              {...register("fullName", {
                required: "Campo requerido",
                minLength: {
                  value: 5,
                  message: "Por favor verifique su información nuevamente",
                },
              })}
              
            />
          </label>

          {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
          

          <label>
            Email:
            <input
              {...register("email", {
                required: "Campo requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Por favor verifique su información nuevamente.",
                  },
              })} 
            />
          </label>

          {errors.email?.message && <p className="error-message">{errors.email.message}</p>}

          <div>
            <button type="submit">Enviar</button>
          </div>

        </form>
      )}
    </div>
  );
};

export default Form;