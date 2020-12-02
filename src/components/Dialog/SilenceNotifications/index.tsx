import React from 'react';
import { Button } from '@material-ui/core';

import './styles.css';

interface SilenceNotificationProps {
  callback(show: boolean): void;
  name: string;
}

const SilenceNotification: React.FC<SilenceNotificationProps> = ({ callback, name }) => {
  return (
    <div id="silence-container">
      <span>Silenciar "{name}"</span>

      <div className="radio-container">
        <div className="radio">
          <input type="radio" id="1" value="1" name="radio" checked />
          <label htmlFor="1">8 horas</label>
        </div>
        <div className="radio">
          <input type="radio" id="2" value="2" name="radio" />
          <label htmlFor="2">1 semana</label>
        </div>
        <div className="radio">
          <input type="radio" id="3" value="3" name="radio" />
          <label htmlFor="3">Sempre</label>
        </div>
      </div>

      <div className="button-container">
        <button type="button" onClick={() => callback(false)} className="button cancel">Cancelar</button>
        <button type="button" onClick={() => callback(false)} className="button">Silenciar Notificações</button>
      </div>
    </div>
  );
}

export default SilenceNotification;