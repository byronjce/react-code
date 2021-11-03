import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const inicialForm = {
  id: "",
  description: "",
};

export const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState(inicialForm);
  let history = useHistory();

  const hundleChange = (e) => {
    /*Controlar los input para que cuando ingresen datos el sistema sepa que se escribe en las cajas de texto*/
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(inicialForm);
    }
  }, [dataToEdit]);

  const hundleSubmit = (e) => {
    e.preventDefault();
    /*Validar datos ingresados en el form que no esten vacios*/
    if (!form.id || !form.description) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    hundleReset();
  };

  const hundleReset = (e) => {
    setForm(inicialForm);
    setDataToEdit(null);

    //Redirigir al home
    history.push("/");
  };
  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={hundleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="Id"
          onChange={hundleChange}
          value={form.id}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={hundleChange}
          value={form.description}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={hundleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
