import React from "react";
import { useHistory } from "react-router";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  /*Destructuracion name, nivel, id */
  let { description, id } = el;
  let history = useHistory();

  const handleEdit = () => {
    setDataToEdit(el);
    history.push(`/editar/${el.id}`);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{description}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
