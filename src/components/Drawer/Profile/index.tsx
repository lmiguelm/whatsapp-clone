import React, { useState } from 'react';
import axios from 'axios';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useTheme } from '../../../contexts/theme';


import './styles.css';

interface User {
  id: number;
  name: string;
  picture: string;
  message: string;
  number: string;
}
interface ProfileProps {
  callback(show: boolean): void;
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ callback, user }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { theme, blackTheme } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div id="drawer-profile" style={{ backgroundColor: theme.backgroundDrawer }} >
        <div className="header-profile" style={{ backgroundColor: theme.backgroundTertiary }}>
          <FiArrowLeft size={24} style={{ cursor: 'pointer' }} onClick={() => callback(false)} />
          <strong style={{ marginLeft: '30px' }}>Perfil</strong>
        </div>

        <div className="img-container">
          <img src={user.picture} />
          <div className="overlap" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
            <FiCamera size={24} />
            <span>MUDAR FOTO DE PERFIL</span>
          </div>
        </div>

        <div className="name-container" style={{ backgroundColor: blackTheme ? '' : theme.backgroundAside, border: blackTheme ? '' : 'none' }}>
          <span style={{ color: theme.colorTertiary }}>Nome</span>
          <div className="input-container">
            <input style={{ backgroundColor: blackTheme ? '' : theme.backgroundInput, color: theme.colorPrimary }} type="text" value={user.name} disabled />
            <BsPencil style={{ color: theme.colorSecondary }} className="icon-edit" size={25} />
          </div>
        </div>

        <div className="info" >
          <strong style={{ color: theme.colorSecondary }} >Esse não é seu nome de usuário e nem seu PIN. Esse nome será visível para seus contatos do WhatsApp.</strong>
        </div>

        <div className="name-container" style={{ backgroundColor: blackTheme ? '' : theme.backgroundAside, border: blackTheme ? '' : 'none' }}>
          <span style={{ color: theme.colorTertiary }}>Recado</span>
          <div className="input-container">
            <input style={{ backgroundColor: blackTheme ? '' : theme.backgroundInput, color: theme.colorPrimary }} type="text" value={user.message} disabled />
            <BsPencil style={{ color: theme.colorSecondary }} className="icon-edit" size={25} />
          </div>
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
        <MenuItem onClick={handleClose}>Ver foto</MenuItem>
        <MenuItem onClick={handleClose}>Tirar foto</MenuItem>
        <MenuItem onClick={handleClose}>Carregar foto</MenuItem>
        <MenuItem onClick={handleClose}>Remover foto</MenuItem>
      </Menu>
    </>
  );
}

export default Profile;