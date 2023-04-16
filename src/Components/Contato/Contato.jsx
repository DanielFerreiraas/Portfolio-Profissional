import React, { useState } from "react";
import "./Contato.css";

import ItemContato from "../ItemContato/ItemContato";
import ContatoDate from "./Contato.json"

function Contato(){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");


    function enviarFormulario(event){
        event.preventDefault();
        
        const texto = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;

        const numeroWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER;

        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(linkWhatsApp, '_blank');
    }

    function mascaraTelefone(event) {
        const texto = event.target.value;
        const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);
    
        let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    
        if (textoApenasNumeros.length < 11) {
            telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        }
    
        setTelefone(telefoneFormatado);
    }
    
    return (
    
    <>
        <div className="centralizar">
            
        {ContatoDate.map(

                (item, id) => 
                <ItemContato
                    key={id}
                    link={item.link}
                    title={item.title}
                ></ItemContato>

            )}


        </div>
       
        <div className="line">
            <hr />
        </div>
        
        <form onSubmit={enviarFormulario}>

            <div className="contate">
                <h1>Contate-me</h1>
            </div>

            <label htmlFor="input-nome">Nome</label>
            <input 
                type="text"
                name="nome"
                id="nome" 
                placeholder=" Nome"
                required minLength="2" 
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />


            <label htmlFor="input-email">E-mail</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="  E-mail" 
                required 
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />


            <label htmlFor="input-tel">Telefone</label>
            <input 
                type="tel" 
                name="tel" 
                id="tel" 
                placeholder=" (00) 00000-0000" 
                required
                pattern="^\(\d{2}\) \d{5}-\d{4}$" 
                maxLength="15" 
                value={telefone}
                onChange={mascaraTelefone}
            />
    
            <label htmlFor="input-msg">Mensagem</label>
            <textarea
                name="input-msg" 
                id="msg" 
                cols="30" 
                rows="10"
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}
            ></textarea>


            <input type="submit" value="ENVIAR" className="button"/>

        </form>

        <div className="url-site">
            <h4>www.daniel.ferreiraas.github.io</h4>
        </div>
        
    </>

    )
}

export default Contato;