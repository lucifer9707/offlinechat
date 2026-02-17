import React from 'react';
import Header from '../components/Header/Header';

const BlockchainView: React.FC = () => {
  return (
    <div className="app">
      <Header title="Blockchain Viewer" showBack />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Blockchain Viewer</h2>
        <p style={{ color: '#6b7280', marginTop: '20px' }}>
          This page will display the blockchain ledger.
        </p>
      </div>
    </div>
  );
};

export default BlockchainView;