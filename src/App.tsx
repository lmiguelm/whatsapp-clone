import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/theme';
import { CircularProgress, LinearProgress } from '@material-ui/core';

import './globalBlack.css';

import './globalWhite.css';

import Aside from './components/Aside';
import Chat from './components/Chat';
import { api } from './services/api';

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
};

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactSelected, setContactSelected] = useState<Contact>(initialValue);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    loadContacts();
  }, []);

  async function loadContacts() {
    const res = await api.get('/contacts');
    setContacts(res.data);
  }

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <CircularProgress style={{ color: '#394045' }} />
      </div>
    );
  } else {
    return (
      <ThemeProvider>
        <div id="page">
          <div className="page-container">
            <Aside contacts={contacts} callback={(res) => setContactSelected(res)} />
            <Chat contactSelected={contactSelected} />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
