import React, { useState } from "react";

/*export default function Formularios() {
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);
    const hundleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se ha enviado");
    };


    return (
        <div>
            <h1>Formularios</h1>
            <form onSubmit={hundleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <p>Elige tu sabor</p>
                <label htmlFor="vue">VueJs</label>
                <input type="radio" id="vue" name="sabor" value="vue" onChange={(e) => setSabor(e.target.value)} defaultChecked />
                <label htmlFor="react">React</label>
                <input type="radio" id="react" name="sabor" value="react" onChange={(e) => setSabor(e.target.value)} />
                <label htmlFor="angular">Angular</label>
                <input type="radio" id="angular" name="sabor" value="angular" onChange={(e) => setSabor(e.target.value)} />

                <p>Elige tu lenguaje</p>
                <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                    <option value="">--Elije una opcion---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="django">Django</option>
                    <option value="go">GO</option>
                </select>
                <br />
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={(e) => setTerminos(e.target.checked)} />
                <br />
                <input type="submit"/>
            </form>
        </div>
    );
}*/

export default function Formularios() {
    const [form, setForm] = useState({});

    const hundleChange = (e) => {
        setForm({
            /**Valor que tiene la variable  ...from/ */
            ...form, [e.target.name]: e.target.value
        });
    };

    const hundleChecked = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.checked
        });
    };

    const hundleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se ha enviado");
    };


    return (
        <div>
            <h1>Formularios</h1>
            <form onSubmit={hundleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="" value={form.nombre} onChange={hundleChange} />
                <p>Elige tu sabor</p>
                <label htmlFor="vue">VueJs</label>
                <input type="radio" id="vue" name="sabor" value="vue" onChange={hundleChange} defaultChecked />
                <label htmlFor="react">React</label>
                <input type="radio" id="react" name="sabor" value="react" onChange={hundleChange} />
                <label htmlFor="angular">Angular</label>
                <input type="radio" id="angular" name="sabor" value="angular" onChange={hundleChange} />

                <p>Elige tu lenguaje</p>
                <select name="lenguaje" onChange={hundleChange} defaultValue="">
                    <option value="">--Elije una opcion---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="django">Django</option>
                    <option value="go">GO</option>
                </select>
                <br />
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={hundleChecked}/>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}