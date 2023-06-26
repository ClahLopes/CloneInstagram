import React from 'react'
import "./PersonAccount.css"
import imagem_01 from "../stories/img/imagem_claudia.jpg"

function PersonAccount() {
  return (
  <div className=".suggestion__username">
    <div className="username__left">
      <span className="dPersonAccount">
        <img className='imgPersonAccount' src={imagem_01}/>
      </span>
    <div className="Account">
      <div className="username__info">
        <span className="username">radian</span>
        <span className="relation">Now to Instagram</span>
      </div>
      <button className="toChange__button">To Change</button>
    </div>
  </div>
</div>
  )
}

export default PersonAccount