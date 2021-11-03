import { Component } from "react";

export default class Padre extends Component {
    state = {
        contador: 0,
    }

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Comunicacion componentes</h2>
                <p>Contador <b>{this.state.contador}</b></p>
                 {/*Acction enviada al componente hijo*/}
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 1" />
                <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 2" />
            </div>
        );
    }
}

function Hijo(props) {
    return (
        <div>
            <h2>{props.mensaje}</h2>
            {/*Acction enviada al componente padre*/}
            <button onClick={props.incrementarContador}>+</button>
        </div>

    );
}