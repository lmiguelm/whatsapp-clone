import React from 'react';
import { FiMoreVertical, FiMessageSquare, FiCircle, FiSearch } from 'react-icons/fi';

import Message from '../Message';

import './styles.css';

export default function Aside() {
  return (
    <aside>
      <div className="profile-container">
        <img src="https://media.discordapp.net/attachments/604432337949950014/781967393114554388/6skneo8tlow51.png" alt="profile" />

        <div className="icons-container">
          <FiCircle className="icon" size={24} />
          <FiMessageSquare className="icon" size={24} />
          <FiMoreVertical className="icon" size={24} />
        </div>
      </div>

      <div className="input-container">
        <input type="text" placeholder="Procurar ou começar uma nova conversa" />
        <FiSearch className="icon-search" size={15} />
      </div>

      <div className="conversation">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </aside>
  );
}