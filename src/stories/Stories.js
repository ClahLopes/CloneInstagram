import './Stories.css'
import imagem_01 from "./img/imagem_claudia.jpg";
import Story from './comps/Story'

export default function Stories() {
    return (
     <div className="Stories">
        <Story imagem_exemplo={imagem_01} nome="Claudia"/>
        <Story imagem_exemplo={imagem_01} nome="Claudia"/>
        <Story imagem_exemplo={imagem_01} nome="Claudia"/>
        <Story imagem_exemplo={imagem_01} nome="Claudia"/>
        <Story imagem_exemplo={imagem_01} nome="Claudia"/>
        <Story imagem_exemplo={imagem_01} nome="Claudia"/>
        <Story imagem_exemplo={imagem_01} nome="Claudia"/>
     </div> 
    )
}