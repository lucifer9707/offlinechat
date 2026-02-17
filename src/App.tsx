import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChatProvider } from './context/ChatContext';
import { PeerProvider } from './context/PeerContext';
import Home from './pages/Home';
import ConnectPeer from './pages/ConnectPeer';
import Settings from './pages/Settings';
import BlockchainView from './pages/BlockchainView';
import './styles/global.css';

function App() {
  return (
    <Router>
      <PeerProvider>
        <ChatProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connect" element={<ConnectPeer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/blockchain" element={<BlockchainView />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ChatProvider>
      </PeerProvider>
    </Router>
  );
}

export default App;