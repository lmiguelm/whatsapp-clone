import React from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5'

import './styles.css';

export default function Message() {
  return (
    <div className="message-container">
      <div className="people-container">
        <img src="https://media.discordapp.net/attachments/604432337949950014/781967393114554388/6skneo8tlow51.png" alt="profile" />
        <div className="message-area">
          <span>Travis Scott</span>
          <div className="message">
            <IoCheckmarkDoneOutline size={20} />
            <span>It's Lit !!!!!</span>
          </div>
        </div>
      </div>
      <span>15:33</span>
    </div>
  );
}