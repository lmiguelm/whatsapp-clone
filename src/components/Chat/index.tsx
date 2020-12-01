import React from 'react';
import { FiMoreVertical, FiSearch } from 'react-icons/fi';
import { IoAttach, IoHappyOutline, IoMic } from 'react-icons/io5';


import './styles.css';
import Logo from '../../assets/index.png';

interface Contact {
  id: number;
  name: string;
  picture: string;
  number: string;
  status: string;
  message: string;
  time: string;
}

interface ChatProps {
  contactSelected: Contact;
}

const Chat: React.FC<ChatProps> = ({ contactSelected: { id, status, message, name, number, picture, time } }) => {
  if (id === 999 && name === 'initial' && picture === 'initial' && message === 'initial') {
    return (
      <div id="chat-none">
        <img src={Logo} alt="Logo" />

        <div className="text-container">
          <h2>Mantenha seu celular conectado</h2>
          <p>O WhatsApp conect ao seu telefone para sincronizar suas mensagens.</p>
          <p>Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</p>
        </div>
      </div>
    );
  } else {
    return (
      <div id="chat">
        <div className="header-container">
          <div className="header-people">
            <img src={picture} alt="profile" />
            <div className="info">
              <strong>{name}</strong>
              <span>{status}</span>
            </div>
          </div>
          <div className="header-option">
            <FiSearch className="icon" size={24} />
            <FiMoreVertical className="icon" size={24} />
          </div>
        </div>

        <div className="content-container">

        </div>

        <div className="footer-container">
          <div className="icons-media">
            <IoHappyOutline size={30} />
            <IoAttach size={30} />
          </div>
          <input type="text" placeholder="Digite um mensagem" />
          <IoMic className="mic" size={30} />
        </div>
      </div>
    );
  }
}

export default Chat;