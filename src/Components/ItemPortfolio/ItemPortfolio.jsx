import React from "react";

import "./ItemPortfolio.css";



function ItemPortfolio(props){
    
    return(

        <a href={props.link} target="_blank">
                <div className="item-portfolio">
                    <img src={props.image} alt="" />
                    <h4>{props.title}</h4>
                </div>
            </a>
            
    )
    
}

export default ItemPortfolio;