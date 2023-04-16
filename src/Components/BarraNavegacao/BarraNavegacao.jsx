import React from "react";
import { Link } from "react-router-dom";
import "./BarraNavegacao.css";

function BarraNavegacao(){

    return(
        <nav>
        <ul>
            <li><Link to="/">Currículo</Link></li>
            <li><Link to="/Portfolio">Portfólio</Link></li>
            <li><Link to="/contato">Contato</Link></li>
        </ul>
        </nav>
    )
}

export default BarraNavegacao;