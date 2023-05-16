import React from "react";

import "../Curriculo/Curriculo.css";

function Curriculo(props) {

    const { certificacoes, experienciaAcademica, experienciaProfissional } = props.curriculo;

    if (!certificacoes || !experienciaAcademica || !experienciaProfissional) {
        return <p>Carregando...</p>
    }

    return (

        <>

            <div className="sec1">
                <h2>Experiência <div className="color-composto">Acadêmica</div></h2>
                {experienciaAcademica.map((item, index) => (
                    <div key={index}>
                        <h3 className="subtitle">{item.instituicao}</h3>
                        <h3 className="conteudo">{item.titulo} - {item.anoInicio}/{item.anoFim}</h3>
                    </div>
                ))}
            </div>

            <div className="sec2">
                <h2>Certificações</h2>
                {certificacoes.map((item, index) => (
                    <div key={index}>
                        <h3 className="subtitle">{item.instituicao}</h3>
                        <h3 className="conteudo">{item.titulo} - {item.anoInicio}/{item.anoFim}</h3>
                    </div>
                ))}
            </div>

            <div className="sec3">
                <h2>Experiência <div className="color-composto">Profissional</div></h2>
                {experienciaProfissional.map((item, index) => (
                    <div key={index}>
                        <h3 className="subtitle">{item.instituicao}</h3>
                        <h3 className="conteudo">{item.titulo} - {item.anoInicio}/{item.anoFim}</h3>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Curriculo;