import React from 'react';

import './styles.css';

import { useTheme } from '../../../contexts/theme';

interface DeleteConversationProps {
  name: string;
  callback(closeDrawer: boolean): void;
}

const DeleteConversation: React.FC<DeleteConversationProps> = ({ name, callback }) => {

  const { theme } = useTheme();

  return (
    <div id="delete-conversation" style={{ backgroundColor: theme.backgroundAside }}>
      <span style={{ color: theme.colorPrimary }}>Apagar conversa com "{name}" ?</span>

      <div className="button-container">
        <button onClick={() => callback(false)} className="button cancel">Cancelar</button>
        <button style={{ color: '#fff' }} onClick={() => callback(false)} className="button">Apagar</button>
      </div>
    </div>
  );
}
export default DeleteConversation;