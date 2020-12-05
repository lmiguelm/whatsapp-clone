import React from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5'

import { useTheme } from '../../contexts/theme';

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
interface MessageProps {
  contact: Contact;
  callback(id: Contact): void;
}

const Message: React.FC<MessageProps> = ({ contact, callback }) => {

  const { theme } = useTheme();

  return (
    <div
      className="message-container"
      onClick={() => callback(contact)}
      style={{
        borderBottom: `1px solid ${theme.border}`
      }}
    >
      <div className="people-container">
        <img src={contact.picture} alt="profile" />
        <div className="message-area">
          <span style={{ color: theme.colorPrimary }}>
            {contact.name}
          </span>
          <div className="message">
            <IoCheckmarkDoneOutline size={20} />
            <span style={{ color: theme.colorSecondary }}>{contact.message}</span>
          </div>
        </div>
      </div>
      <span style={{ color: theme.colorSecondary }} >{contact.time}</span>
    </div >
  );
}

export default Message;