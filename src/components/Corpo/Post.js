import React from "react";
let curtiu = false;
export default function Post(prop){
  
  const [bookmark, bookmarkSet] = React.useState(<ion-icon name="bookmark-outline"></ion-icon>)
  const [curtida, curtidaSet] = React.useState(<span><ion-icon name="heart-outline"></ion-icon></span>)
  const [curtidas, curtidasSet] = React.useState(prop.curtidas)
  
  function salvar(){
      bookmarkSet(<ion-icon name="bookmark"></ion-icon>);
  }

  function curtir(){
    if(!curtiu){
      
      curtiu = true;
      curtidasSet(curtidas +1)
    curtidaSet(<span class='vermelho'><ion-icon name="heart" className='vermelho'></ion-icon></span>)
    
    }
    else{
      curtiu = false;
      curtidasSet(curtidas -1);
      curtidaSet(<ion-icon name="heart-outline"></ion-icon>)
    }
  }

  function imagemDoubleClick(){
    if(!curtiu){
    curtidasSet(curtidas + 1)
    console.log(curtidas)
    }
    curtiu=true;
    curtidaSet(<span class="vermelho"><ion-icon name="heart" className='vermelho'></ion-icon></span>)
  }

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

          <div class="conteudo" onClick={imagemDoubleClick}>
            <img src={prop.conteudo} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <span onClick={curtir}>
                {curtida}
                </span>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div onClick={salvar}>
                {bookmark}
              </div>
            </div>

            <div class="curtidas">
              <img src={curtiuImg} />
              <div class="texto">
                Curtido por <strong>{prop.curtiu}</strong> e <strong>outras {curtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>

    )
}

