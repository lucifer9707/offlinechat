import React from 'react';
import Header from '../components/Header/Header';

const ConnectPeer: React.FC = () => {
  return (
    <div className="app">
      <Header title="Connect to Peer" showBack />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Connect to Peer Page</h2>
        <p style={{ color: '#6b7280', marginTop: '20px' }}>
          This page will allow you to connect to peers manually or via QR code.
        </p>
      </div>
    </div>
  );
};

export default ConnectPeer;