import React from 'react';
import { FiX, FiChevronRight } from 'react-icons/fi';
import { Checkbox } from '@material-ui/core';

import './styles.css';

import { useTheme } from '../../../contexts/theme';
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

  const { theme } = useTheme();

  return (
    <div id="contact-data" style={{ backgroundColor: theme.backgroundAside }}>
      <div className="header" style={{ backgroundColor: theme.backgroundDrawer }} >
        <FiX style={{ color: theme.colorPrimary }} className="icon" size={24} onClick={() => callback(false)} />
        <span style={{ color: theme.colorPrimary }}>Dados do contato</span>
      </div>

      <div className="info-container" style={{ borderBottom: `10px solid ${theme.border}` }}>
        <img src={picture} />
        <div className="text-container">
          <strong style={{ color: theme.colorPrimary }}>{name}</strong>
          <span style={{ color: theme.colorSecondary }}>{status}</span>
        </div>
      </div>

      <div className="media-container" style={{ borderBottom: `10px solid ${theme.border}` }}>
        <span style={{ color: theme.colorTertiary }}>Mídia, links e docs</span>
        <FiChevronRight style={{ color: theme.colorPrimary, margin: '10px 30px' }} className="icon" size={24} />
      </div>

      <div className="options-container">
        <div className="notification">
          <span style={{ color: theme.colorPrimary }}>Silenciar notificações</span>
          <Checkbox style={{
            color: '#00af9c'
          }} />
        </div>
        <div className="favorite">
          <span style={{ color: theme.colorPrimary }}>Mensagens favoritas</span>
          <FiChevronRight style={{ color: theme.colorPrimary }} className="icon" size={24} />
        </div>
        <div className="temp">
          <span style={{ color: theme.colorPrimary }}>Mensagens temporarias</span>
          <FiChevronRight style={{ color: theme.colorPrimary }} className="icon" size={24} />
        </div>
      </div>

    </div>
  );
}

export default ContactData;