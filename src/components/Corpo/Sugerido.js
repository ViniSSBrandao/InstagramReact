
export default function Sugerido(prop){
    return(
        <div class="sugestao">
            <div class="usuario">
              <img src={prop.profile} />
              <div class="texto">
                <div class="nome">{prop.nome}</div>
                <div class="razao">{prop.segue}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
    )
}