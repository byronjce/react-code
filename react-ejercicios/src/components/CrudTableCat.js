import React from "react";
import CrudTableRowCat from "./CrudTableRowCat";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRowCat
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
