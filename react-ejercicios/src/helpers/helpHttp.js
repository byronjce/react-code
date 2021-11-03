export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    //Default header que acepte json
    const defaultHeaders = {
      accept: "application/json",
    };

    //Varibale para abortar la peticion
    const controller = new AbortController();

    //Enviar al objeto option que aborte la aplicacion cuando no este el servidor activo
    options.signal = controller.signal;

    //Si no viene metodo por defecto colocar GET
    options.method = options.method || "GET";

    //Si el usuario evnvio header o cabecera concatenar con la defaultHeaders
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;

    //Si tiene body convertirlo porque viene como objeto y convertirlo en JSON string (porque el metodo GET no viene body)
    options.body = JSON.stringify(options.body) || false;

    //Sino hay body eliminarlo de las opciones
    if (!options.body) delete options.body;

    console.log(options);

    //Si despues de 3 segundos no recibo respuesta del servidor abortar peticion
    setTimeout(() => controller.abort(), 3000);

    //Retornar
    return (
      fetch(endpoint, options)
        /*Si la respuesta es correcta*/
        .then((res) =>
          res.ok
            ? res.json()
            : //Para obtener el error y los estados
              Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrio un error",
              })
        )
        .catch((err) => err)
    );
  };

  //Si no nos envia options le ponemos vacio
  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
