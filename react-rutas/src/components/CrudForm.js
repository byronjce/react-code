import React, { useState, useEffect } from "react";

const inicialForm = {
  name: "",
  nivel: "",
  id: null,
};

export const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState(inicialForm);

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
    if (!form.name || !form.nivel) {
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
  };
  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={hundleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={hundleChange}
          value={form.name}
        />
        <input
          type="text"
          name="nivel"
          placeholder="Nivel"
          onChange={hundleChange}
          value={form.nivel}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={hundleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
