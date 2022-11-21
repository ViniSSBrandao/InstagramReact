import Sugerido from "./Sugerido";

export default function Usuario(){
  const quemSeguir = [
    {profile: 'assets/img/bad.vibes.memes.svg', nome: 'bad.vibes.memes', segue: 'Segue você'},
    {profile: 'assets/img/chibirdart.svg', nome: 'chibirdart', segue:'Novo no Instagram'}
  ];

    return (
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {quemSeguir.map((n) => <Sugerido profile = {n.profile} nome={n.nome} segue={n.segue}/>)}
          
        </div>
    );
}