import React, { Component } from "react";


export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    //Funcion
    sumar(e) {
        console.log("Sumando");
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    //Funcion
    restar(e) {
        console.log("Restando");
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES6</h2>
                <nav>
                    {
                        //Llamar a la funcion entre parenteris la carga al iniciar la app
                        //<button onClick={this.sumar()}>+</button>*/
                        //Llamar sin parentesis carga cuando presione el boton
                    }
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

//Prperties inicializer
export class EventosES7 extends Component {
    state = {
        contador: 0,
    };

    //Arrow functions
    sumar = (e) => {
        console.log("Sumando");
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    //Arrow Funcion
    restar = (e) => {
        console.log("Restando");
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    {
                        //Llamar a la funcion entre parenteris la carga al iniciar la app
                        //<button onClick={this.sumar()}>+</button>*/
                        //Llamar sin parentesis carga cuando presione el boton
                    }
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

//Crando componente
function Boton(props) {
    return (<button onClick={props.myOnClick}>Boton hecho componente</button>)
}

export class MasSobreEventos extends Component {
    //Arrow function
    handleClick = (e, msg) => {
        console.log(e);
        console.log(e.target);
        console.log(e.nativeEvent);
        console.log(msg);
    }

    render() {
        return (
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) => this.handleClick(e, "Hola pasando parametro en evento")}>Saludar</button>
                {/*Evento personalizado */}
                <Boton myOnClick={(e) => this.handleClick(e, "Hola pasando parametro en evento")}/>
            </div>
        );
    }
}