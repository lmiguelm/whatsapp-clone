import React from 'react';
import { FiMoreVertical, FiMessageSquare, FiCircle, FiSearch } from 'react-icons/fi';

import './styles.css';

export default function Aside() {
  return (
    <aside>
      <div className="profile-container">
        <img src="https://media.discordapp.net/attachments/604432337949950014/781967393114554388/6skneo8tlow51.png" alt="profile" />

        <div className="icons-container">
          <FiCircle size={24} />
          <FiMessageSquare size={24} />
          <FiMoreVertical size={24} />
        </div>
      </div>

      <div className="input-container">
        <input type="text" placeholder="Procurar ou começar uma nova conversa" />
        <FiSearch className="icon-search" size={15} />
      </div>

      <hr />
    </aside>
  );
}