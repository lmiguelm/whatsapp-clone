import React, { useState, useEffect } from 'react';
import { FiMoreVertical, FiSearch, FiArrowLeft, FiX } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { RiDonutChartLine } from 'react-icons/ri';

import { Menu, MenuItem, Dialog } from '@material-ui/core';

import { useTheme } from '../../contexts/theme';

import Message from '../Message';
import Drawer from '../Drawer';
import Profile from '../Drawer/Profile';
import Contacts from '../Drawer/Contacts';
import Status from '../Dialog/Status';

import axios from 'axios';


import './styles.css';
import Config from '../Drawer/Config';



interface Contact {
  id: number;
  name: string;
  picture: string;
  number: string;
  status: string;
  message: string;
  time: string;
}

interface AsideProps {
  contacts: Contact[];
  callback(contact: Contact): void;
}


const Aside: React.FC<AsideProps> = ({ contacts, callback }) => {

  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);
  const [showDrawerProfile, setShowDrawerProfile] = useState(false);
  const [showDrawerContact, setShowDrawerContact] = useState(false);
  const [showDrawerConfig, setShowDrawerConfig] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showStatus, setStatus] = useState(false);
  const { theme, blackTheme } = useTheme();
  const [user, setUser] = useState<Contact>({
    name: '',
    id: 0,
    message: '',
    number: '',
    picture: '',
    status: '',
    time: ''
  });


  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const res = await axios.get('http://localhost:8080/user');
    setUser(res.data);
  }

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function filterContacts() {
    if (text == '') {
      return contacts;
    } else {
      return contacts.filter(c => c.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) >= 0).sort();
    }
  }

  function backSearch() {
    setText('');
    setFocused(false);
    filterContacts();
  }

  useEffect(() => {
    if (blackTheme) {
      document.body.style.backgroundColor = '#090e11';
    } else {
      document.body.style.backgroundColor = '#e1e2e3';
    }
  }, [blackTheme])

  return (
    <>
      <aside>
        <div className="profile-container" style={{ backgroundColor: theme.backgroundSecondary }}>
          <img onClick={() => setShowDrawerProfile(true)} src={user.picture} alt="profile" />

          <div className="icons-container">
            <RiDonutChartLine onClick={() => setStatus(true)} className="icon" size={24} />
            <BiCommentDetail onClick={() => setShowDrawerContact(true)} className="icon" size={24} />
            <FiMoreVertical className="icon" size={24} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
          </div>
        </div>

        <div className="input-container" style={{ backgroundColor: theme.backgroundSecondary, borderBottom: `1px solid ${theme.border}` }} >
          <input
            style={{ backgroundColor: theme.backgroundInput, color: theme.colorPrimary }}
            onFocus={() => setFocused(true)}
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={!focused ? 'Procurar ou começar uma nova conversa' : ''}
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

        <div className="conversation" style={{ backgroundColor: theme.backgroundAside, borderBottom: `1px solid ${theme.border}` }}>
          {filterContacts().map(contact => (
            <Message key={contact.id} contact={contact} callback={contactSelected => callback(contactSelected)} />
          ))}
        </div>
      </aside>

      <Drawer
        anchor="left"
        show={showDrawerProfile}
      >
        <Profile user={user} callback={res => setShowDrawerProfile(res)} />
      </Drawer>

      <Drawer
        anchor="left"
        show={showDrawerContact}
      >
        <Contacts contacts={contacts}
          contactSelected={contactSelected => callback(contactSelected)}
          callback={res => setShowDrawerContact(res)}
        />
      </Drawer>

      <Drawer
        anchor="left"
        show={showDrawerConfig}
      >
        <Config user={user} callback={(close, showProfile) => {
          setShowDrawerConfig(close);
          setShowDrawerProfile(showProfile);
        }} />
      </Drawer>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onMouseDown={handleClose}
      >
        <MenuItem onClick={handleClose}>Novo grupo</MenuItem>
        <MenuItem onClick={handleClose}>Criar uma sala</MenuItem>
        <MenuItem onClick={() => setShowDrawerProfile(true)}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Arquivadas</MenuItem>
        <MenuItem onClick={handleClose}>Favoritas</MenuItem>
        <MenuItem onClick={() => setShowDrawerConfig(true)}>Configurações</MenuItem>
        <MenuItem onClick={handleClose}>Desconectar</MenuItem>
      </Menu>

      <Dialog
        fullScreen
        open={showStatus}
        onClose={() => setStatus(false)}
      >
        <Status user={user} contacts={contacts} callback={res => setStatus(res)} />
      </Dialog>
    </>
  );
}
export default Aside;