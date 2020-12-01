import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';
import { BsPencil } from 'react-icons/bs';

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

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const res = await axios.get('http://localhost:8080/user');
    setUser(res.data);
  }

  return (
    <div id="drawer-profile">
      <div className="header-profile">
        <FiArrowLeft size={24} style={{ cursor: 'pointer' }} onClick={() => callback(false)} />
        <strong style={{ marginLeft: '30px' }}>Perfil</strong>
      </div>

      <img src={user.picture} alt="profile" />

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
  );
}

export default Profile;