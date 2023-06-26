import { Avatar } from "@mui/material";
import React from 'react'

export default function Sugesstions2() {
  return (
    <div className='sugesstions'>
      <div className=".suggestions__usernames">
        <div className=".suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="informacoes">
              <div className="username__info">
                <span className="username">radian</span>
                <span className="relation">Now to Instagram</span>
              </div>
              <button className="follow__button">Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
