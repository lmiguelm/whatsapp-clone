import React, { useState, useRef } from 'react';
import { FiMoreVertical, FiSearch } from 'react-icons/fi';
import { IoAttach, IoHappyOutline, IoMic, IoSend, IoCheckmarkDoneOutline, IoChevronDown } from 'react-icons/io5';
import { Menu, MenuItem } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import ContactData from '../../components/Drawer/ContactData';
import Drawer from '../../components/Drawer';


import './styles.css';
import SearchMessage from '../Drawer/SearchMessage';
import SilenceNotification from '../Dialog/SilenceNotifications';
import DeleteMessages from '../Dialog/DeleteMessages';
import DeleteConversation from '../Dialog/DeleteConversation';

import { useTheme } from '../../contexts/theme';

import LogoBlack from '../../assets/index-black.png';
import LogoWhite from '../../assets/index-white.png';
interface Contact {
  id: number;
  name: string;
  picture: string;
  number: string;
  status: string;
  message: string;
  time: string;
}

interface ChatProps {
  contactSelected: Contact;
}


const Chat: React.FC<ChatProps> = ({ contactSelected: { id, status, message, name, number, picture, time } }) => {

  const [msg, setMsg] = useState('');
  const [msgs, setMsgs] = useState<string[]>([]);
  const [info, setInfo] = useState(false);
  const div = useRef<HTMLDivElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showDrawerContactData, setShowDrawerContactData] = useState(false);
  const [showDrawerSearchMessage, setShowDrawerSearchMessage] = useState(false);
  const [showDialogSilence, setShowDialogSilence] = useState(false);
  const [showDialogDelete, setShowDialogDelete] = useState(false);
  const [showDialogDeleteConversation, setShowDialogDeleteConversation] = useState(false);

  const { wallpaper, theme, blackTheme } = useTheme();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (div.current?.scrollTop) {
    div.current.scrollTop = div.current?.scrollHeight;
  }

  function KeyPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && msg !== '') {
      handleSendMsg();
    }
  }

  function handleSendMsg() {
    setMsgs([...msgs, msg]);
    setMsg('');
  }

  if (id === 999 && name === 'initial' && picture === 'initial' && message === 'initial') {
    return (
      <div id="chat-none" style={{ backgroundColor: theme.backgroundIndex }}>
        <img src={blackTheme ? LogoBlack : LogoWhite} alt="Logo" />

        <div className="text-container">
          <h2 style={{ color: theme.colorSecondary }} >Mantenha seu celular conectado</h2>
          <p style={{ color: theme.colorSecondary }}>O WhatsApp conect ao seu telefone para sincronizar suas mensagens.</p>
          <p style={{ color: theme.colorSecondary }}>Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</p>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div id="chat">
          <div className="header-container" style={{ backgroundColor: theme.backgroundSecondary, borderLeft: `1px solid ${theme.border}` }} >
            <div className="header-people" onClick={() => setShowDrawerContactData(true)}>
              <img src={picture} alt="profile" />
              <div className="info">
                <p style={{ color: theme.colorPrimary }}>{name}</p>
                <span style={{ color: theme.colorSecondary }}>{status}</span>
              </div>
            </div>
            <div className="header-option">
              <FiSearch className="icon" size={24} onClick={() => setShowDrawerSearchMessage(true)} />
              <FiMoreVertical className="icon" size={24} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
            </div>
          </div>

          <div className="content-container" ref={div} style={{ backgroundColor: wallpaper }}>
            {msgs.map((msg, key) => (
              <div key={key} className="balon" onMouseEnter={() => setInfo(true)} onMouseOut={() => setInfo(false)}>
                <p>{msg}</p>
                <div className="status" >
                  <span>{new Date().getHours()}:{new Date().getMinutes()}</span>
                  {!info ? (
                    <IoCheckmarkDoneOutline className="icon-balon" size={17} />
                  ) : (
                      <IoChevronDown className="icon-balon" size={17} />
                    )}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-container" style={{ backgroundColor: theme.backgroundFotterChat, borderLeft: `1px solid ${theme.border}` }}>
            <div className="icons-media">
              <IoHappyOutline size={30} style={{ color: theme.colorSecondary }} />
              <IoAttach size={30} style={{ color: theme.colorSecondary }} />
            </div>
            <input
              onKeyPress={KeyPress}
              type="text"
              value={msg}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)}
              placeholder="Digite um mensagem"
              style={{ backgroundColor: theme.backgroundInput, color: theme.colorSecondary }}
            />
            {msg == '' ? (
              <IoMic size={30} className="mic" style={{ color: theme.colorSecondary }} />
            ) : (
                <IoSend size={30} className="mic" onClick={handleSendMsg} style={{ color: theme.colorSecondary }} />
              )}
          </div>
        </div>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onMouseDown={handleClose}
        >
          <MenuItem onClick={() => setShowDrawerContactData(true)}>Dados do contato</MenuItem>
          <MenuItem onClick={handleClose}>Silenciar mensagens</MenuItem>
          <MenuItem onClick={() => setShowDialogSilence(true)}>Silenciar notificações</MenuItem>
          <MenuItem onClick={() => setShowDialogDelete(true)}>Limpar conversa</MenuItem>
          <MenuItem onClick={() => setShowDialogDeleteConversation(true)}>Apagar conversa</MenuItem>
        </Menu>

        <Drawer
          anchor="right"
          show={showDrawerContactData}
        >
          <ContactData
            contact={{ id, status, message, name, number, picture, time }}
            callback={res => setShowDrawerContactData(res)}
          />
        </Drawer>


        <Drawer
          anchor="right"
          show={showDrawerSearchMessage}
        >
          <SearchMessage contact={{ id, status, message, name, number, picture, time }} callback={res => setShowDrawerSearchMessage(res)} />
        </Drawer>

        <Dialog
          open={showDialogSilence}
          onClose={() => setShowDialogSilence(false)}
        >
          <SilenceNotification callback={res => setShowDialogSilence(res)} name={name} />
        </Dialog>

        <Dialog
          open={showDialogDelete}
          onClose={() => setShowDialogDelete(false)}
        >
          <DeleteMessages name={name} callback={(closeDialog: boolean, deleteMsgs: boolean) => {
            setShowDialogDelete(closeDialog);
            if (deleteMsgs) {
              setMsgs([]);
            }
          }} />
        </Dialog>

        <Dialog
          open={showDialogDeleteConversation}
          onClose={() => setShowDialogDeleteConversation(false)}
        >
          <DeleteConversation name={name} callback={res => setShowDialogDeleteConversation(res)} />
        </Dialog>
      </>
    );
  }
}

export default Chat;