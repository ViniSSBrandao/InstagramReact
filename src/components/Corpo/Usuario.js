
export default function Usuario(prop){
    return (
        <div class={"usuario"}>
            <img src={prop.imagem} />
            <div class="texto">
            <strong>{prop.perfil}</strong>
            <span>
                {prop.nome}
                <ion-icon name="pencil"></ion-icon>
            </span>
        </div>  
        </div>
    );
}