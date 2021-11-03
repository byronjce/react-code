import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  /*Destructuracion name, nivel, id */
  let { name, nivel, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{nivel}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
