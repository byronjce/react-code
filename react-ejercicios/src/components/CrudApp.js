import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDB = [
  {
    id: 1,
    name: "Goku",
    nivel: "Dios",
  },
  {
    id: 2,
    name: "Gohan",
    nivel: "Super sayayin",
  },
  {
    id: 3,
    name: "Milk",
    nivel: "Humano",
  },
  {
    id: 4,
    name: "Vegeta",
    nivel: "Dios",
  },
  {
    id: 5,
    name: "Krilin",
    nivel: "Super humano",
  },
];

function CrudApp() {
  const [db, setDb] = useState(initialDB);
  const [datoToEdit, setDatoToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("¿Estas seguro de eliminar el registro?");
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Crud app</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={datoToEdit}
          setDataToEdit={setDatoToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDatoToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
}

export default CrudApp;
