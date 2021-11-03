import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useFetch(url);

  //Si la data es null no retornar nada
  if (!data) return null;

  if (error) {
    return (
      <Message msg={`Error ${error.status} : ${error.statusText}`} bgColor />
    );
  }

  let id = `select-${title}`;

  /*Convertir la primer letra en mayuscula*/
  let label = title.charAt(0).toUpperCase() + title.slice(1);

  //Obtengo datos de la propiedad title
  let options = data.response[title];

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value={title}>Elige un {title}</option>
        {data && options.map((el) => <option value={el}>{el}</option>)}
      </select>
    </>
  );
};

export default SelectList;
