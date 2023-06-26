import { Avatar } from "@mui/material";
import React from 'react';
import "./Sugesstions.css";
import Sugesstions2 from "./Sugesstions2";
import PersonAccount from "./PersonAccount";

function Sugesstions() {
  return (
      <div className="Sugesstion">
        <PersonAccount/>
        <div className="suggestions__title">Sugesstions for you
        <button className="seeItAll__button">See it all</button>
      </div>
      <Sugesstions2/>
      <Sugesstions2/>
      <Sugesstions2/>
      <Sugesstions2/>
    </div>
  )
}

export default Sugesstions