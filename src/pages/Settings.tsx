import React from 'react';
import Header from '../components/Header/Header';

const Settings: React.FC = () => {
  return (
    <div className="app">
      <Header title="Settings" showBack />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Settings Page</h2>
        <p style={{ color: '#6b7280', marginTop: '20px' }}>
          This page will contain app settings and preferences.
        </p>
      </div>
    </div>
  );
};

export default Settings;