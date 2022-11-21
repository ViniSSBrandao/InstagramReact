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

  
    const curtiuImg = `assets/img/${prop.curtiu}.svg`
    return(
        <div class="post" data-test='post'>
          <div class="topo">
            <div class="usuario">
              <img src= {prop.perfil} />
              {prop.usuario}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo" >
            <img src={prop.conteudo} onClick={imagemDoubleClick} data-test='post-image'/>
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <span onClick={curtir} data-test="like-post">
                {curtida}
                </span>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div onClick={salvar} data-test="save-post">
                {bookmark}
              </div>
            </div>

            <div class="curtidas">
              <img src={curtiuImg} />
              <div class="texto" data-test="likes-number">
                Curtido por <strong>{prop.curtiu}</strong> e <strong>outras {curtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>

    )
}

