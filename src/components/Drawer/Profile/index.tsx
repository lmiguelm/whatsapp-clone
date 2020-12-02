import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import './styles.css';

interface ProfileProps {
  callback(show: boolean): void;
}

interface User {
  id: number;
  name: string;
  picture: string;
  message: string;
  number: string;
}

const Profile: React.FC<ProfileProps> = ({ callback }) => {

  const [user, setUser] = useState<User>({ id: 0, name: '', picture: '', message: '', number: '' });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const res = await axios.get('http://localhost:8080/user');
    setUser(res.data);
  }

  return (
    <>
      <div id="drawer-profile">
        <div className="header-profile">
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

        <div className="name-container">
          <span>Nome</span>
          <div className="input-container">
            <input type="text" value={user.name} disabled />
            <BsPencil className="icon-edit" size={25} />
          </div>
        </div>

        <div className="info">
          <strong>Esse não é seu nome de usuário e nem seu PIN. Esse nome será visível para seus contatos do WhatsApp.</strong>
        </div>

        <div className="name-container">
          <span>Recado</span>
          <div className="input-container">
            <input type="text" value={user.message} disabled />
            <BsPencil className="icon-edit" size={25} />
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