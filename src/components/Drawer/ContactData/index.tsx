import React from 'react';
import { FiX, FiChevronRight } from 'react-icons/fi';
import { Checkbox } from '@material-ui/core';

import './styles.css';

interface Contact {
  id: number;
  name: string;
  picture: string;
  number: string;
  status: string;
  message: string;
  time: string;
}

interface ContactDataProps {
  callback(show: boolean): void;
  contact: Contact;
}

const ContactData: React.FC<ContactDataProps> = ({ callback, contact: { id, status, message, name, number, picture, time } }) => {
  return (
    <div id="contact-data">
      <div className="header">
        <FiX className="icon" size={24} onClick={() => callback(false)} />
        <span>Dados do contato</span>
      </div>

      <div className="info-container">
        <img src={picture} />
        <div className="text-container">
          <strong>{name}</strong>
          <span>{status}</span>
        </div>
      </div>

      <div className="media-container">
        <span>Mídia, links e docs</span>
        <FiChevronRight style={{ margin: '10px 30px' }} className="icon" size={24} />
      </div>

      <div className="options-container">
        <div className="notification">
          <span>Silenciar notificações</span>
          <Checkbox />
        </div>
        <div className="favorite">
          <span>Mensagens favoritas</span>
          <FiChevronRight className="icon" size={24} />
        </div>
        <div className="temp">
          <span>Mensagens temporarias</span>
          <FiChevronRight className="icon" size={24} />
        </div>
      </div>

    </div>
  );
}

export default ContactData;