import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/theme';
import axios from 'axios';

import './globalBlack.css';

import './globalWhite.css';


import Aside from './components/Aside';
import Chat from './components/Chat';

interface Contact {
  id: number;
  name: string;
  picture: string;
  number: string;
  status: string;
  message: string;
  time: string;
}

const initialValue = {
  id: 999,
  name: 'initial',
  picture: 'initial',
  number: '99999999',
  status: 'initial',
  message: 'initial',
  time: 'initial',
}

function App() {

  const [contacts, setContacts] = useState([]);
  const [contactSelected, setContactSelected] = useState<Contact>(initialValue);

  const { theme, blackTheme } = useTheme();

  useEffect(() => {
    loadContacts();
  }, []);

  async function loadContacts() {
    const res = await axios.get('http://localhost:8080/contacts');
    setContacts(res.data);
  }

  return (
    <ThemeProvider>
      <div id="page">
        <div className="page-container">
          <Aside contacts={contacts} callback={res => setContactSelected(res)} />
          <Chat contactSelected={contactSelected} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
