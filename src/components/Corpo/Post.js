
export default function Post(prop){
  console.log(prop);
    const curtiuImg = `assets/img/${prop.curtiu}.svg`
    return(
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src= {prop.perfil} />
              {prop.usuario}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={prop.conteudo} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={curtiuImg} />
              <div class="texto">
                Curtido por <strong>{prop.curtiu}</strong> e <strong>outras {prop.curtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>

    )
}