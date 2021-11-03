import React, { useRef } from 'react';

export default function Referencias(props) {

    //PAra class component
    //let refMenu = createRef()

    let refMenu = useRef(), refMenuBtn = useRef();
    console.log(refMenu, refMenuBtn);

    const handelToggleMenu = (e) => {
        /*const $menu = document.getElementById("menu");
        if (e.target.textContent === "Menú") {
            e.target.textContent = "Cerrar";
            $menu.style.display = "block"
        } else {
            e.target.textContent = "Menú";
            $menu.style.display = "none"
        }*/

        if (refMenuBtn.current.textContent === "Menú") {
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block"
        } else {
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = "none"
        }
    };
    return (
        <div>
            <h2>Referencias</h2>
            <button ref={refMenuBtn} onClick={handelToggleMenu}>Menu</button>
            <nav ref={refMenu} style={{ display: "none" }}>
                <a href="/">Seccion1</a>
                <br />
                <a href="/">Seccion2</a>
                <br />
                <a href="/">Seccion3</a>
                <br />
                <a href="/">Seccion4</a>
                <br />
                <a href="/">Seccion5</a>
            </nav>
        </div>
    );
}