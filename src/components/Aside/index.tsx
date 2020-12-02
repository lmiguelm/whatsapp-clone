import React, { useState } from 'react';
import { FiMoreVertical, FiSearch, FiArrowLeft, FiX } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { RiDonutChartLine } from 'react-icons/ri';

import { Menu, MenuItem, Badge } from '@material-ui/core';

import Message from '../Message';
import Drawer from '../Drawer';
import Profile from '../Drawer/Profile';
import Contacts from '../Drawer/Contacts';

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

interface AsideProps {
  contacts: Contact[];
  callback(contact: Contact): void;
}


const Aside: React.FC<AsideProps> = ({ contacts, callback }) => {

  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);
  const [showDrawer, SetShowDrawer] = useState(false);
  const [showDrawerProfile, SetShowDrawerProfile] = useState(false);
  const [showDrawerContact, SetShowDrawerContact] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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

  function handleShowDrawerContact() {
    SetShowDrawerContact(true);
    SetShowDrawer(true);
  }

  function handleShowDrawerProfile() {
    SetShowDrawerProfile(true);
    SetShowDrawer(true);
  }

  return (
    <>
      <aside>
        <div className="profile-container">
          <img onClick={handleShowDrawerProfile} src="https://media.discordapp.net/attachments/604432337949950014/781967393114554388/6skneo8tlow51.png" alt="profile" />

          <div className="icons-container">
            <Badge overlap="circle" color="primary" variant="dot" invisible={false} style={{ paddingBottom: '3px' }} >
              <RiDonutChartLine className="icon" size={24} />
            </Badge>
            <BiCommentDetail onClick={handleShowDrawerContact} className="icon" size={24} />
            <FiMoreVertical className="icon" size={24} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
          </div>
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

        <div className="conversation">
          {filterContacts().map(contact => (
            <Message key={contact.id} contact={contact} callback={contactSelected => callback(contactSelected)} />
          ))}
        </div>
      </aside>

      <Drawer
        anchor="left"
        show={showDrawer}
        callback={res => SetShowDrawer(res)}
      >
        {showDrawerProfile && (
          <Profile callback={res => {
            SetShowDrawer(res);
            SetShowDrawerProfile(res);
          }} />
        )}
        {showDrawerContact && (
          <Contacts contacts={contacts}
            contactSelected={contactSelected => callback(contactSelected)}
            callback={res => {
              SetShowDrawer(res);
              SetShowDrawerContact(res);
            }} />
        )}
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
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Arquivadas</MenuItem>
        <MenuItem onClick={handleClose}>Favoritas</MenuItem>
        <MenuItem onClick={handleClose}>Configurações</MenuItem>
        <MenuItem onClick={handleClose}>Desconectar</MenuItem>
      </Menu>
    </>
  );
}
export default Aside;