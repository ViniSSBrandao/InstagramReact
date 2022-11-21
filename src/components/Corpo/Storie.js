
export default function Storie(props){
    console.log(props)
    const imagem = "assets/img/9gag.svg";
    const user =  '9gag' ;
    return (
        <div class="story">
        <div class="imagem">
          <img src={props.imagem} />
        </div>
        <div class="usuario">
          {props.user}
        </div>
      </div>
    )
}