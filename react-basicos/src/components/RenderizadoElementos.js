import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
    return (
        <li>
            <a href={props.el.web} target="_blank" rel="noreferrer">{props.el.name}</a>
        </li>
    );
}

export default class RenderizadoElementos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seasons: ['Verano', 'Primavera', 'Invierno'],
        };
    }

    render() {
        console.log(data)
        return (
            <div>
                <h2>Rederizado de elementos</h2>
                <h4>estaciones</h4>
                <ol>
                    {this.state.seasons.map((el, index) =>
                        (<li key={index}>{el}</li>))}
                </ol>
                <hr />
                <h3>Frmaworks frontend</h3>
                <ul>
                    {
                        data.frameworks.map(el =>
                            <ElementoLista key={el.id} el={el} />
                        )
                    }
                </ul>
            </div>
        );
    }
}