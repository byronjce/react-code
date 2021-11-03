import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    //Realizando una funcion ayncrona
    const fetchData = async () => {
      setLoading(true);
      try {
        //Realizando la conexion al api
        const res = await fetch(url);
        //Si existe error
        if (!res.ok) {
          let err = new Error("Error en la petición fetch");
          ///Si el api no devuleve una estado de error le colocamos '00'
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrio un error";
          throw err;
        }

        //Esperar a que convierta a json la respuesta
        const json = await res.json();

        //Si todo hizo bien
        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        //Si hubo error
        if (signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        //si no hubo error
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    //Retornando si da problemas
    return () => abortController.abort();
  }, [url]);

  return { data, error, loading };
};
