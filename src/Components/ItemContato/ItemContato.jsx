import React from "react";

import "./ItemContato.css"

function ItemContato(propriedade){
    return(
            <a href={propriedade.link} target="_blank">
                <div className="item-contato">
                    <h4>{propriedade.title}</h4>
                </div>
            </a>
    )
}

export default ItemContato;