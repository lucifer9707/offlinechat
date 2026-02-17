import React from 'react';

interface MessageProps {
  message: {
    id: string;
    sender: string;
    content: string;
    timestamp: Date;
    isOwn: boolean;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div style={{
      display: 'flex',
      marginBottom: '8px',
      justifyContent: message.isOwn ? 'flex-end' : 'flex-start'
    }}>
      <div style={{
        maxWidth: '70%',
        padding: '10px 14px',
        borderRadius: '18px',
        backgroundColor: message.isOwn ? '#2563eb' : '#ffffff',
        color: message.isOwn ? 'white' : '#1f2937',
        position: 'relative',
        wordWrap: 'break-word',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}>
        {!message.isOwn && (
          <div style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            marginBottom: '4px',
            color: '#2563eb'
          }}>
            {message.sender}
          </div>
        )}
        <div style={{ fontSize: '0.95rem', lineHeight: '1.4', marginBottom: '4px' }}>
          {message.content}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '4px',
          fontSize: '0.7rem',
          color: message.isOwn ? 'rgba(255,255,255,0.7)' : '#6b7280'
        }}>
          {formatTime(message.timestamp)}
          {message.isOwn && <span>✓</span>}
        </div>
      </div>
    </div>
  );
};

export default Message;