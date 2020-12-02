import React from 'react';

import './styles.css';

interface DeleteConversationProps {
  name: string;
  callback(closeDrawer: boolean): void;
}

const DeleteConversation: React.FC<DeleteConversationProps> = ({ name, callback }) => {
  return (
    <div id="delete-conversation">
      <span>Apagar conversa com "{name}" ?</span>

      <div className="button-container">
        <button onClick={() => callback(false)} className="button cancel">Cancelar</button>
        <button onClick={() => callback(false)} className="button">Apagar</button>
      </div>
    </div>
  );
}
export default DeleteConversation;