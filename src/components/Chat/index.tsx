import React, { FormEvent, useState } from 'react';
import { FiMoreVertical, FiSearch } from 'react-icons/fi';
import { IoAttach, IoHappyOutline, IoMic, IoSend, IoCheckmarkDoneOutline, IoChevronDown } from 'react-icons/io5';


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

  const [msg, setMsg] = useState('');
  const [msgs, setMsgs] = useState<string[]>([]);
  const [info, setInfo] = useState(false);

  function KeyPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && msg !== '') {
      handleSendMsg();
    }
  }

  function handleSendMsg() {
    setMsgs([...msgs, msg]);
    setMsg('');
  }

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
          {msgs.map(msg => (
            <div className="balon" onMouseEnter={() => setInfo(true)} onMouseOut={() => setInfo(false)}>
              <p>{msg}</p>
              <div className="status" >
                <span>0:00</span>
                {!info ? (
                  <IoCheckmarkDoneOutline className="icon-balon" size={17} />
                ) : (
                    <IoChevronDown className="icon-balon" size={17} />
                  )}
              </div>
            </div>
          ))}
        </div>

        <div className="footer-container">
          <div className="icons-media">
            <IoHappyOutline size={30} />
            <IoAttach size={30} />
          </div>
          <input onKeyPress={KeyPress} type="text" value={msg} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)} placeholder="Digite um mensagem" />
          {msg == '' ? (
            <IoMic size={30} className="mic" />
          ) : (
              <IoSend size={30} className="mic" onClick={handleSendMsg} />
            )}
        </div>
      </div>
    );
  }
}

export default Chat;