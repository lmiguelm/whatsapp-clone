import React from 'react';
import { IoCheckmarkDoneOutline } from 'react-icons/io5'

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
  return (
    <div className="message-container" onClick={() => callback(contact)}>
      <div className="people-container">
        <img src={contact.picture} alt="profile" />
        <div className="message-area">
          <span>{contact.name}</span>
          <div className="message">
            <IoCheckmarkDoneOutline size={20} />
            <span>{contact.message}</span>
          </div>
        </div>
      </div>
      <span>{contact.time}</span>
    </div>
  );
}

export default Message;