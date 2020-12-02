import React, { useState } from 'react';
import { FiSearch, FiArrowLeft, FiX } from 'react-icons/fi';

import './styles.css';

interface SearchMessageProps {
  callback(show: boolean): void;
  contact: Contact;
}

interface Contact {
  id: number;
  name: string;
  picture: string;
  number: string;
  status: string;
  message: string;
  time: string;
}

const SearchMessage: React.FC<SearchMessageProps> = ({ callback, contact: { id, status, message, name, number, picture, time } }) => {

  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);

  function backSearch() {
    setText('');
    setFocused(false);
  }

  return (
    <div id="search-msg">
      <div className="header">
        <FiX className="icon" size={24} onClick={() => callback(false)} />
        <span style={{ marginLeft: '30px' }}>Pesquisar mensagens</span>
      </div>

      <div className="input-container">
        <input onFocus={() => setFocused(true)} type="text" value={text} onChange={e => setText(e.target.value)} placeholder={!focused ? 'Pesquisar...' : ''} />
        {focused ? (
          <>
            <FiArrowLeft className="icon-search" onClick={backSearch} size={20} />
            <FiX className="icon-search-right" onClick={backSearch} size={20} />
          </>
        ) : (
            <FiSearch className="icon-search" size={20} />
          )}
      </div>

      <span>Pesquisar mensagem com {name}.</span>
    </div>
  );
}

export default SearchMessage;