import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function Sidebar(){
    return (
        <div class="sidebar">
            <Usuario imagem='assets/img/catanacomics.svg' nome='Catana' perfil='catanacomics'/>
           
            <Sugestoes />
            <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>
        </div>
    );
}