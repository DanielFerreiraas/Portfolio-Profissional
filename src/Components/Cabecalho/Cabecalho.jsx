import React from "react";

import "./Cabecalho.css"

function Cabecalho(props){
    const {nome, foto, cargo} = props.informacoes
    return(
        <>
            <header>
            {/* <div className="navbar"><h1>{nome}</h1></div> */}
            <img src = {foto} alt="" />
            <h1>{nome}</h1>
            <h3>{cargo}</h3>
            </header>
        </>
    )
}


export default Cabecalho;