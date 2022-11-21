import Storie from "./Storie"

export default function Stories(){
    const usuarios =[
      {id: 1,imagem: "assets/img/9gag.svg", user: "9gag"},
      {id: 2,imagem: "assets/img/meowed.svg", user: "meowed"},
      {id: 3,imagem: "assets/img/barked.svg", user: "barked"},
      {id: 4,imagem: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
      {id: 5,imagem: "assets/img/wawawicomics.svg", user: "wawawicomics"},
      {id: 6,imagem: "assets/img/respondeai.svg", user: "respondeai"},
      {id: 7,imagem: "assets/img/filomoderna.svg", user: "filomoderna"},
      {id: 8,imagem: "assets/img/memeriagourmet.svg", user: "memeriagourmet"},
    ];
    
    const imagem = usuarios.map((p) => p.imagem);
    const user = usuarios.map((p) => p.user);
    

    return (
       
        <div class="stories">

        {usuarios.map((c) => <Storie imagem = {c.imagem} user = {c.user}/>)}
        
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
}