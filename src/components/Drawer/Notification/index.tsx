import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Checkbox from '../../CheckBox';

import './styles.css';

interface NotificationProps {
  callback(show: boolean): void;
}

const Notification: React.FC<NotificationProps> = ({ callback }) => {
  return (
    <div id="drawer-notification">
      <div className="header">
        <FiArrowLeft size={24} style={{ cursor: 'pointer' }} onClick={() => callback(false)} />
        <strong style={{ marginLeft: '30px' }}>Notificações</strong>
      </div>

      <div className="checkbox-container">
        <Checkbox id="1" label="Sons" />
        <Checkbox id="2" label="Notificações na área de trabalho" />
        <Checkbox id="3" label="mostrar prévia" />
        <Checkbox id="4" label="Desativas todas as notificações da área de trabalho" />
      </div>
    </div>
  );
}

export default Notification;