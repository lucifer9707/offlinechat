import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../../context/ChatContext';
import Message from '../Message/Message';

const ChatWindow: React.FC = () => {
  const { messages, sendMessage, currentChat } = useChat();
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  if (!currentChat) {
    return (
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafb',
        color: '#6b7280'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#1f2937' }}>
            Select a peer to start chatting
          </h3>
          <p style={{ fontSize: '0.9rem' }}>
            Choose from the sidebar
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f9fafb',
      height: '100%',
      position: 'relative'
    }}>
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} style={{
        display: 'flex',
        padding: '16px 20px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        gap: '12px'
      }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: '12px 16px',
            border: '1px solid #e5e7eb',
            borderRadius: '24px',
            fontSize: '0.95rem',
            backgroundColor: '#f9fafb',
            color: '#1f2937',
            outline: 'none'
          }}
        />
        <button 
          type="submit" 
          disabled={!newMessage.trim()}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: newMessage.trim() ? '#2563eb' : '#9ca3af',
            color: 'white',
            border: 'none',
            cursor: newMessage.trim() ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px'
          }}
        >
          →
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;