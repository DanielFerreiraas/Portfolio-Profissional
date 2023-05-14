import React from "react";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import "./portfolio.css";

function Portfolio({ portfolio }) {

    
    return (


        <div className="cent-tudo-cont">

            <h2 className="conteudo">Meus Projetos</h2>

            <hr />

            {portfolio.map(
                (item, index) => 
                <ItemPortfolio
                    key={index}
                    link={item.link}
                    image={item.imagem}
                    title={item.titulo}
                ></ItemPortfolio>

            )}

        </div>
            

    )
}


export default Portfolio;