import React from "react";
import perfil from "../../image/daniel-img.jpg"
import "./Cabecalho.css"

function Cabecalho(){
    return(
        <header>
        <img src = {perfil} alt="" />
        <h1>Daniel Ferreira</h1>
        <h3>Desenvolvedor de Software</h3>
        </header>
    )
}


export default Cabecalho;