import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { IoNotificationsSharp, IoHelpCircle, IoContrastOutline, IoBan, IoImageSharp } from 'react-icons/io5';

import Drawer from '../../Drawer';
import Notification from '../Notification';
import Wallpaper from '../Wallpaper';

import { useTheme } from '../../../contexts/theme';

import './styles.css';
import { Dialog } from '@material-ui/core';
import Theme from '../Theme';

interface User {
  id: number;
  name: string;
  picture: string;
  message: string;
  number: string;
}

interface ConfigProps {
  callback(show: boolean, showProfile: boolean): void;
  user: User;
}

const Config: React.FC<ConfigProps> = ({ callback, user }) => {

  const [showDrawerNotification, setShowDrawerNotification] = useState(false);
  const [showDrawerWallpaper, setShowDrawerWallpaper] = useState(false);
  const [showDialogTheme, setShowDialogTheme] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <div id="drawer-config" style={{ backgroundColor: theme.backgroundAside }} >
        <div className="header" style={{ backgroundColor: theme.backgroundTertiary }}>
          <FiArrowLeft size={24} style={{ cursor: 'pointer' }} onClick={() => callback(false, false)} />
          <strong style={{ marginLeft: '30px' }}>Configurações</strong>
        </div>

        <div className="data-container" onClick={() => callback(false, true)}>
          <img src={user.picture} alt={user.name} />
          <div className="text-container">
            <p style={{ color: theme.colorPrimary }}>{user.name}</p>
            <span style={{ color: theme.colorSecondary }}>{user.message.substr(0, 43)}...</span>
          </div>
        </div>

        <div className="config-container">
          <div className="item" onClick={() => setShowDrawerNotification(true)}>
            <IoNotificationsSharp size={24} className="icon" />
            <div className="text" style={{ borderBottom: `1px solid ${theme.border}` }}>
              <span style={{ color: theme.colorPrimary }}>Notificações</span>
            </div>
          </div>

          <div className="item" onClick={() => setShowDialogTheme(true)}>
            <IoContrastOutline size={24} className="icon" />
            <div className="text" style={{ borderBottom: `1px solid ${theme.border}` }}>
              <span style={{ color: theme.colorPrimary }}>Tema</span>
            </div>
          </div>

          <div className="item" onClick={() => setShowDrawerWallpaper(true)}>
            <IoImageSharp size={24} className="icon" />
            <div className="text" style={{ borderBottom: `1px solid ${theme.border}` }}>
              <span style={{ color: theme.colorPrimary }}>Papel de parede da conversa</span>
            </div>
          </div>

          <div className="item">
            <IoBan size={24} className="icon" />
            <div className="text" style={{ borderBottom: `1px solid ${theme.border}` }}>
              <span style={{ color: theme.colorPrimary }}>Bloqueados</span>
            </div>
          </div>

          <div className="item">
            <IoHelpCircle size={24} className="icon" />
            <div className="text" style={{ borderBottom: `1px solid ${theme.border}` }}>
              <span style={{ color: theme.colorPrimary }}>Ajuda</span>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        anchor="left"
        show={showDrawerNotification}
      >
        <Notification callback={res => setShowDrawerNotification(res)} />
      </Drawer>

      <Drawer
        anchor="left"
        show={showDrawerWallpaper}
      >
        <Wallpaper callback={res => setShowDrawerWallpaper(res)} />
      </Drawer>

      <Dialog
        open={showDialogTheme}
        onClose={() => setShowDialogTheme(false)}
      >
        <Theme callback={res => setShowDialogTheme(res)} />
      </Dialog>
    </>
  );
}
export default Config;