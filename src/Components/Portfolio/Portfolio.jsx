import React from "react";

import "./portfolio.css";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import portfolio from "./Portfolio.json"

import img from "../../image/netbit2.png"
import img2 from "../../image/webprodutos.png"
import img3 from "../../image/site-pessoal.png"

function Portfolio() {

    const images = [img,img2,img3]
    
    return (


        <div className="cent-tudo-cont">

            {portfolio.map(
                (item, index) => 
                <ItemPortfolio
                    key={index}
                    link={item.link}
                    image={images[index]}
                    title={item.title}
                ></ItemPortfolio>

            )}

        </div>
            

    )
}

export default Portfolio;