import React from 'react';
import { FiX } from 'react-icons/fi';
import { RiDonutChartLine } from 'react-icons/ri';

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

interface StatusProps {
  callback(close: boolean): void;
  contacts: Contact[];
  user: Contact;
}

const Status: React.FC<StatusProps> = ({ callback, contacts, user }) => {
  return (
    <div id="status">
      <aside>
        <div className="my-status">
          <img src={user.picture} alt={user.name} />
          <div className="info">
            <p>Meus status</p>
            <span>Sem atualizações</span>
          </div>
        </div>
      </aside>

      <div className="content-container">
        <FiX size={24} className="icon-close" onClick={() => callback(false)} />

        <div className="content">
          <RiDonutChartLine size={100} className="icon-status" />
          <span>Clique no contato para ver as atualizações de status</span>
        </div>
      </div>
    </div>
  );
}

export default Status;
