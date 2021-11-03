import React from "react";
import styled from 'styled-components';

export default function ComponentesEstilizados() {

    const MyH3 = styled.h3`
        padding: 2rem,
        text-align: center,
    `;
    return (
        <div>
            <h2>Styled-Components</h2>
            <h3>Hola soy un h3 stylizado con styled-components</h3>
        </div>
    );

}