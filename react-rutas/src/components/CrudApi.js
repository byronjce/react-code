import React, { useState, useEffect } from "react";
import "./Loader.css";

import { helpHttp } from "../helpers/helpHttp";
import CrudFormCat from "./CrudFormCat";
import CrudTableCat from "./CrudTableCat";
import Loader from "./Loader";
import Message from "./Message";
import { Route, Switch, HashRouter, NavLink } from "react-router-dom";

function CrudApi() {
  const [db, setDb] = useState([]);
  const [datoToEdit, setDatoToEdit] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://127.0.0.1:8000/products/category-products";

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      console.log(res);

      if (!res.err) {
        setDb([...db, res]);
        setError(null);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endPoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endPoint, options).then((res) => {
      console.log(res);

      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("¿Estas seguro de eliminar el registro?");
    if (isDelete) {
      let options = {
        headers: { "content-type": "application/json" },
      };

      let endPoint = `${url}/${id}`;
      api.del(endPoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <HashRouter basename="categorias">
        <header>
          <h2>Curp api rutas</h2>
          <nav>
            <NavLink to="/" activeClassName="activw">
              Categorias
            </NavLink>
            <NavLink to="/agregar" activeClassName="activw">
              Crear categoria
            </NavLink>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <article className="grid-1-2">
              {loading && <Loader />}
              {error && (
                <Message
                  msg={`Error ${error.status} : ${error.statusText}`}
                  bgColor="#dc3545"
                />
              )}
              {db && (
                <CrudTableCat
                  data={db}
                  setDataToEdit={setDatoToEdit}
                  deleteData={deleteData}
                />
              )}
            </article>
          </Route>
          <Route exact path="/agregar">
            <CrudFormCat
              createData={createData}
              updateData={updateData}
              dataToEdit={datoToEdit}
              setDataToEdit={setDatoToEdit}
            />
          </Route>
          <Route exact path="/editar/:id">
            <CrudFormCat
              createData={createData}
              updateData={updateData}
              dataToEdit={datoToEdit}
              setDataToEdit={setDatoToEdit}
            />
          </Route>
          <Route path="*">
            <h2>Error not found</h2>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default CrudApi;
