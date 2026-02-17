import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePeers } from '../context/PeerContext';
import { useChat } from '../context/ChatContext';
import Header from '../components/Header/Header';
import ChatWindow from '../components/ChatWindow/ChatWindow';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { peers } = usePeers();
  const { currentChat, setCurrentChat } = useChat();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return '#10b981';
      case 'away': return '#f59e0b';
      case 'offline': return '#9ca3af';
      default: return '#9ca3af';
    }
  };

  return (
    <div className="app">
      <Header />
      <div style={{ 
        display: 'flex',
        flex: 1,
        overflow: 'hidden'
      }}>
        {/* Sidebar */}
        <div style={{ 
          width: '280px',
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
          <div style={{
            padding: '16px',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h2 style={{ 
              fontSize: '1rem',
              fontWeight: 600,
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              margin: 0
            }}>
              PEERS
            </h2>
          </div>
          
          {/* Peer List */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '8px'
          }}>
            {peers.map(peer => (
              <div 
                key={peer.id} 
                onClick={() => setCurrentChat(peer.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  marginBottom: '4px',
                  backgroundColor: currentChat === peer.id ? '#f3f4f6' : 'transparent',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (currentChat !== peer.id) {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentChat !== peer.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '40px',
                  height: '40px',
                  marginRight: '12px',
                  flexShrink: 0
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>
                    {peer.name[0]}
                  </div>
                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: getStatusColor(peer.status),
                    border: '2px solid #ffffff'
                  }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ 
                    fontWeight: 500, 
                    color: '#1f2937',
                    marginBottom: '4px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {peer.name}
                  </div>
                  <div style={{ 
                    fontSize: '0.75rem',
                    color: getStatusColor(peer.status)
                  }}>
                    {peer.status.charAt(0).toUpperCase() + peer.status.slice(1)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            padding: '16px',
            borderTop: '1px solid #e5e7eb'
          }}>
            <button 
              onClick={() => navigate('/connect')}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              + Connect to Peer
            </button>
          </div>
        </div>

        {/* Chat Window */}
        <ChatWindow />
      </div>
    </div>
  );
};

export default Home;