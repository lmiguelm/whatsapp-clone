import React, { useState } from 'react';
import { FiMoreVertical, FiSearch, FiArrowLeft, FiX } from 'react-icons/fi';
import { RiUserAddLine } from 'react-icons/ri';

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


interface ContactsProps {
  callback(show: boolean): void;
  contactSelected(contact: Contact): void;
  contacts: Contact[];
}

const Contacts: React.FC<ContactsProps> = ({ callback, contacts, contactSelected }) => {

  const [text, setText] = useState('');
  const [focused, setFocused] = useState(true);
  const { theme } = useTheme();

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
    <aside id="drawer-contact" style={{ backgroundColor: theme.backgroundAside }}>
      <div className="header-contact" style={{ backgroundColor: theme.backgroundTertiary }}>
        <FiArrowLeft size={24} style={{ cursor: 'pointer' }} onClick={() => callback(false)} />
        <strong style={{ marginLeft: '30px' }}>Nova conversa</strong>
      </div>

      <div className="input-container" style={{ backgroundColor: theme.backgroundDrawer, borderBottom: `1px solid ${theme.border}` }}>
        <input
          onFocus={() => setFocused(true)}
          type="text" value={text}
          onChange={e => setText(e.target.value)}
          placeholder={!focused ? 'Procurar ou começar uma nova conversa' : ''}
          style={{ backgroundColor: theme.backgroundInput, color: theme.colorPrimary }}
        />
        {focused ? (
          <>
            <FiArrowLeft style={{ color: theme.colorSecondary }} className="icon-search" onClick={backSearch} size={20} />
            <FiX className="icon-search-right" onClick={backSearch} size={20} />
          </>
        ) : (
            <FiSearch className="icon-search" size={20} />
          )}
      </div>

      <div className="scroll">
        <div className="new-group" style={{ borderBottom: `1px solid ${theme.border}` }}>
          <div className="btn-new-group" >
            <RiUserAddLine size={24} />
          </div>
          <p style={{ color: theme.colorPrimary, marginLeft: '10px' }}>Novo grupo</p>
        </div>

        <div className="frequentes" style={{ borderBottom: `1px solid ${theme.border}` }}>
          <span style={{ color: theme.colorTertiary }}>Contatos Frequentes</span>
        </div>

        {filterContacts().map(c => (
          <div key={c.id} className="contact" onClick={() => contactSelected(c)} style={{ borderBottom: `1px solid ${theme.border}` }}>
            <img src={c.picture} alt={c.name} />
            <div className="info-contact">
              <span className="contact-name" style={{ color: theme.colorPrimary }}>{c.name}</span>
              <span style={{ color: theme.colorSecondary }}>{c.message}</span>
            </div>
          </div>
        ))}
      </div>
    </aside >
  );
}

export default Contacts;