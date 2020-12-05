import React from 'react';
import { Checkbox } from '@material-ui/core';

import './styles.css';

import { useTheme } from '../../../contexts/theme';

interface DeleteMessagesProps {
  name: string;
  callback(closeDrawer: boolean, deleteMsgs: boolean): void;
}

const DeleteMessages: React.FC<DeleteMessagesProps> = ({ name, callback }) => {

  const { theme } = useTheme();

  return (
    <div id="delete-mgs" style={{ backgroundColor: theme.backgroundAside }} >
      <span style={{ color: theme.colorPrimary }}>Limpar conversa com "{name}" ?</span>
      <div className="checkbox">
        <Checkbox id="checkbox" style={{ color: '#ddd' }} />
        <label htmlFor="checkbox" style={{ color: theme.colorPrimary }}>Manter mensagens favoritas</label>
      </div>
      <div className="button-container">
        <button onClick={() => callback(false, false)} className="button cancel">Cancelar</button>
        <button style={{ color: '#fff' }} onClick={() => callback(false, true)} className="button">Limpar</button>
      </div>
    </div>
  );
}
export default DeleteMessages;