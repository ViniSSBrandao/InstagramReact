import React from "react";

export default function Usuario(prop){
    
   
    

    const [imagem, setImagem] = React.useState(prop.imagem);
    const [nome, setNome] = React.useState(prop.nome);

   function novaImagem(){
        const entrada = prompt("Escolha seu nome de usuario")
        setImagem(entrada)
   }

    function novoNome(){
        const entrada = prompt("Escolha seu nome de usuario")
        setNome(entrada)
    }
    
    

    return (
        <div class={"usuario"} data-test="user">
            <img src={imagem} onClick={novaImagem} data-test="profile-image"/>
            <div class="texto">
            <strong>{prop.perfil}</strong>
            <span data-test="name">
                <Nome nome={nome}/>
                <ion-icon data-test='edit-name' name="pencil" onClick={novoNome}></ion-icon>
            </span>
        </div>  
        </div>
    );
}



function Nome(prop){
return(<>{prop.nome}</>);
}

function clicouFoto(){
    const novaFoto = {
        imagem: prompt("insira link para sua nova foto de perfil")
    }
    
    Usuario(novaFoto)
}