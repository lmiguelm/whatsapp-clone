import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { IoNotificationsSharp, IoHelpCircle, IoContrastOutline, IoBan, IoImageSharp } from 'react-icons/io5';

import './styles.css';

interface User {
  id: number;
  name: string;
  picture: string;
  message: string;
  number: string;
}

interface ConfigProps {
  callback(show: boolean): void;
  user: User;
}

const Config: React.FC<ConfigProps> = ({ callback, user }) => {
  return (
    <div id="drawer-config">
      <div className="header">
        <FiArrowLeft size={24} style={{ cursor: 'pointer' }} onClick={() => callback(false)} />
        <strong style={{ marginLeft: '30px' }}>Configurações</strong>
      </div>

      <div className="data-container">
        <img src={user.picture} alt={user.name} />
        <div className="text-container">
          <p>{user.name}</p>
          <span>{user.message.substr(0, 43)}...</span>
        </div>
      </div>

      <div className="config-container">
        <div className="item">
          <IoNotificationsSharp size={24} className="icon" />
          <div className="text">
            <span>Notificações</span>
          </div>
        </div>

        <div className="item">
          <IoContrastOutline size={24} className="icon" />
          <div className="text">
            <span>Tema</span>
          </div>
        </div>

        <div className="item">
          <IoImageSharp size={24} className="icon" />
          <div className="text">
            <span>Papel de parede da conversa</span>
          </div>
        </div>

        <div className="item">
          <IoBan size={24} className="icon" />
          <div className="text">
            <span>Bloqueados</span>
          </div>
        </div>

        <div className="item">
          <IoHelpCircle size={24} className="icon" />
          <div className="text">
            <span>Ajuda</span>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Config;