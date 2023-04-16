import React from "react";
import "../Curriculo/Curriculo.css";
import data from "../Curriculo/Curriculo.json"


function Curriculo(){

    return (
        <>

    <div className="cent-tudo">

        <div className="item-curriculo">
            <h2>Experiência Acadêmica</h2>
        </div>

        <h2 className="titulo">{data.experienciaAcademica[0].titulo}</h2>
        <h4>{data.experienciaAcademica[0].descricao}</h4>
        
        <div className="item-curriculo">
            <h2>Cursos</h2>
        </div>
       
        <h2 className="titulo">{data.curso[0].nomeOrganizacao}</h2>
            <h4>{data.curso[0].descricaoCurso}</h4>

        <h2 className="titulo">{data.curso[1].nomeOrganizacao}</h2>
            <h4>{data.curso[1].descricaoCurso}</h4>

        <div className="item-curriculo">
            <h2>Habilidades</h2>
        </div>

        <div className="sk">

            {data.habilidade.map((item, index) => (
                <h4 key={index}>{item.skill}</h4>
            ))}
            
        </div>
        
        {/* <div className="item-curriculo">
            <h2>Dev Tools</h2>
        </div> */}

    </div>
  
    </>
    )
}

export default Curriculo;