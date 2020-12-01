import React, { useState } from 'react';
import { FiMoreVertical, FiSearch, FiArrowLeft, FiX } from 'react-icons/fi';
import { BiCommentDetail } from 'react-icons/bi';
import { RiDonutChartLine } from 'react-icons/ri';

import Message from '../Message';
import Drawer from '../Drawer';
import Profile from '../Drawer/Profile';

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

  return (
    <>
      <aside>
        <div className="profile-container">
          <img onClick={() => SetShowDrawer(true)} src="https://media.discordapp.net/attachments/604432337949950014/781967393114554388/6skneo8tlow51.png" alt="profile" />

          <div className="icons-container">
            <RiDonutChartLine className="icon" size={24} />
            <BiCommentDetail className="icon" size={24} />
            <FiMoreVertical className="icon" size={24} />
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
        <Profile callback={res => SetShowDrawer(res)} />
      </Drawer>
    </>
  );
}
export default Aside;