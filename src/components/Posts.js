import Post from "./Corpo/Post";

export default function Posts(){
    const posts = [
      {perfil:'assets/img/meowed.svg', usuario: 'meowed', conteudo: 'assets/img/gato-telefone.svg', curtiu: 'respondeai', curtidas: '999.999' },
      {perfil:'assets/img/barked.svg', usuario: 'barked', conteudo: 'assets/img/dog.svg', curtiu: 'adorable_animals', curtidas: '765.222' }
    ];

    return (
        <div class="posts">
          {posts.map((n) => <Post perfil = {n.perfil} usuario={n.usuario} conteudo={n.conteudo} curtiu={n.curtiu} curtidas={n.curtidas}/>)}
        
      </div>
    
    );
}