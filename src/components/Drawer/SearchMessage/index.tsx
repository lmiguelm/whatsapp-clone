import React, { useState } from 'react';
import { FiSearch, FiArrowLeft, FiX } from 'react-icons/fi';

import './styles.css';

import { useTheme } from '../../../contexts/theme';
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

  const { theme } = useTheme();

  function backSearch() {
    setText('');
    setFocused(false);
  }

  return (
    <div id="search-msg" style={{ backgroundColor: theme.backgroundAside }}>
      <div className="header" style={{ backgroundColor: theme.backgroundTertiary }}>
        <FiX className="icon" size={24} onClick={() => callback(false)} />
        <span style={{ marginLeft: '30px' }}>Pesquisar mensagens</span>
      </div>

      <div className="input-container" style={{ backgroundColor: theme.backgroundSecondary, borderBottom: `1px solid ${theme.border}` }}>
        <input
          onFocus={() => setFocused(true)}
          type="text" value={text}
          onChange={e => setText(e.target.value)}
          placeholder={!focused ? 'Pesquisar...' : ''}
          style={{ backgroundColor: theme.backgroundInput, color: theme.colorPrimary }}
        />
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