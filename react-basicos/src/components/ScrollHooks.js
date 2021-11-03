import React, { useState, useEffect } from 'react';

export default function ScrollHooks(props) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        //console.log("Moviendo scroll");

        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);

        return () => {
            window.removeEventListener("scroll", detectarScroll);
            //console.log("Fase de desmontaje");
        };
    }, [scrollY]);



    useEffect(() => {
        //console.log("Fase de mpntaje");
    }, []);

    useEffect(() => {
        //console.log("Actualizacion");
    });

    useEffect(() => {
        return () => {
           // console.log("Fase de desmontaje");
        };
    });


    return (
        <>
            <h2>Hooks - useEfect y ciclo de vida</h2>
            <p>Scroll y del nav {scrollY} pixels</p>
        </>
    );
}