import "./Story.css"

export default function Story(props) {
    return (
  
      <div className='Story'>
        <div className="dImgStory">
          <img className='imgStory' src={props.imagem_exemplo}/>
        </div>
        <span className='nomeStory'>{props.nome}</span>
      </div>
  
    )
  }