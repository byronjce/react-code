import React, { useState } from "react";
import "./Estilos.css";
import "./Estilos.scss";
import moduleStyles from "./Estilos.module.css";

export default function Estilos() {
    let myEstile = {
        borderRadius: ".50rem",
        margin: "2rem auto",
        maxWidth: "50%",
    };

    return (

        <div className="estilos">
            <h1>Estilos</h1>
            <h3 className="bg-react">Estilos en hoja css externa</h3>
            <h3 className="bg-react" style={{ borderRadius: ".25rem", margin: "1rem" }}>Estilos en linea (atributo style)</h3>
            <h3 className="bg-react" style={myEstile}>Estilos en linea</h3>
            <h3 className="bg-react" style={myEstile}>Estilos en linea</h3>
            <h3 className="bg-react" style={myEstile}>Agregando normalize
                <br />
                <code>@import-nomalize;</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos con modulos</h3>

            <h3 className="bg-sass">Estilos con sass</h3>
        </div>
    );
}