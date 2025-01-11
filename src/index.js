import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './layout/Header';
import DestinationIndex from './components/DestinationIndex';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { destinationAPI } from './api/destinationApi';
import DestinationList from './components/DestinationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={destinationAPI}>
    <Header/>
    <DestinationIndex/>
    <DestinationList/>

    </ApiProvider>
    
  </React.StrictMode>
);
