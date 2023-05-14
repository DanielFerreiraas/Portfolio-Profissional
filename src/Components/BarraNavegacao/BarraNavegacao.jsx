import React from "react";

import { Link } from "react-router-dom";

import "./BarraNavegacao.css";

function BarraNavegacao(){

    return(
        <nav>
            <ul>
                <li><h3><Link to="/">Currículo</Link></h3></li>
                <li><h3><Link to="/Portfolio">Portfólio</Link></h3></li>
                <li><h3><Link to="/Contato">Contato</Link></h3></li>
            </ul>
        </nav>
    )
}

export default BarraNavegacao;