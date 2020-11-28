import React from 'react';
import { FiMoreVertical, FiSearch } from 'react-icons/fi';
import './styles.css';

export default function Chat() {
  return (
    <div id="chat">
      <div className="header-container">
        <div className="header-people">
          <img src="https://media.discordapp.net/attachments/604432337949950014/781967393114554388/6skneo8tlow51.png" alt="profile" />
          <div className="info">
            <strong>Travis Scott</strong>
            <span>Visto por ultimo hoje as 16:00</span>
          </div>
        </div>
        <div className="header-option">
          <FiSearch className="icon" size={24} />
          <FiMoreVertical className="icon" size={24} />
        </div>
      </div>
    </div>
  );
}