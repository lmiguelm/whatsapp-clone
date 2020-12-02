import React, { useState } from 'react';
import { FiMoreVertical, FiSearch, FiArrowLeft, FiX } from 'react-icons/fi';
import { RiUserAddLine } from 'react-icons/ri';

import './styles.css';

import Message from '../../Message';

interface Contact {
  id: number;
  name: string;
  picture: string;
  number: string;
  status: string;
  message: string;
  time: string;
}


interface ContactsProps {
  callback(show: boolean): void;
  contactSelected(contact: Contact): void;
  contacts: Contact[];
}

const Contacts: React.FC<ContactsProps> = ({ callback, contacts, contactSelected }) => {

  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);

  function backSearch() {
    setText('');
    setFocused(false);
    filterContacts();
  }

  function filterContacts() {
    if (text == '') {
      return contacts;
    } else {
      return contacts.filter(c => c.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) >= 0).sort();
    }
  }

  return (
    <aside id="drawer-contact">
      <div className="header-contact">
        <FiArrowLeft size={24} style={{ cursor: 'pointer' }} onClick={() => callback(false)} />
        <strong style={{ marginLeft: '30px' }}>Nova conversa</strong>
      </div>

      <div className="input-container">
        <input onFocus={() => setFocused(true)} type="text" value={text} onChange={e => setText(e.target.value)} placeholder={!focused ? 'Procurar ou começar uma nova conversa' : ''} />
        {focused ? (
          <>
            <FiArrowLeft className="icon-search" onClick={backSearch} size={20} />
            <FiX className="icon-search-right" onClick={backSearch} size={20} />
          </>
        ) : (
            <FiSearch className="icon-search" size={20} />
          )}
      </div>

      <div className="new-group">
        <div className="btn-new-group">
          <RiUserAddLine size={24} />
        </div>
        <p style={{ marginLeft: '10px' }}>Novo grupo</p>
      </div>

      <span>Contatos Frequentes</span>

      <div className="contact-container">
        {filterContacts().map(c => (
          <div key={c.id} className="contact" onClick={() => contactSelected(c)}>
            <img src={c.picture} alt={c.name} />
            <div className="info-contact">
              <span className="contact-name">{c.name}</span>
              <span>{c.message}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Contacts;