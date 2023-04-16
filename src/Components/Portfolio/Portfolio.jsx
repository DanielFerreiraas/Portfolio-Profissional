import React from "react";

import "./portfolio.css";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import portfolio from "./Portfolio.json"



function Portfolio() {

    
    return (


        <div className="cent-tudo-cont">

            {portfolio.map(
                (item, index) => 
                <ItemPortfolio
                    key={index}
                    link={item.link}
                    image={item.image}
                    title={item.title}
                ></ItemPortfolio>

            )}

        </div>
            

    )
}

export default Portfolio;