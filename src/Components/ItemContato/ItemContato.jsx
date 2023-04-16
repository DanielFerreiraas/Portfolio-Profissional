import React from "react";

import "./ItemContato.css"

function ItemContato(propriedade){
    return(
        <a href={propriedade.link} target="_blank">
            <div className="item-contato">
                <h2>{propriedade.title}</h2>
            </div>
        </a>
    )
}

export default ItemContato;