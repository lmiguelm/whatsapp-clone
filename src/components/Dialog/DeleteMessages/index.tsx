import React from 'react';
import { Checkbox } from '@material-ui/core';

import './styles.css';

interface DeleteMessagesProps {
  name: string;
  callback(closeDrawer: boolean, deleteMsgs: boolean): void;
}

const DeleteMessages: React.FC<DeleteMessagesProps> = ({ name, callback }) => {
  return (
    <div id="delete-mgs">
      <span>Limpar conversa com "{name}" ?</span>
      <div className="checkbox">
        <Checkbox id="checkbox" style={{ color: '#ddd' }} />
        <label htmlFor="checkbox">Manter mensagens favoritas</label>
      </div>
      <div className="button-container">
        <button onClick={() => callback(false, false)} className="button cancel">Cancelar</button>
        <button onClick={() => callback(false, true)} className="button">Limpar</button>
      </div>
    </div>
  );
}
export default DeleteMessages;