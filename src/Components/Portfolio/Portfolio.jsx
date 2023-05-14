import React from "react";

import "./portfolio.css";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

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