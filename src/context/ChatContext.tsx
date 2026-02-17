import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isOwn: boolean;
}

interface ChatContextType {
  messages: Message[];
  sendMessage: (content: string) => void;
  currentChat: string | null;
  setCurrentChat: (peerId: string | null) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'System',
      content: 'Welcome to Offline Chat!',
      timestamp: new Date(),
      isOwn: false,
    },
    {
      id: '2',
      sender: 'Alice',
      content: 'Hey, are you there?',
      timestamp: new Date(Date.now() - 3600000),
      isOwn: false,
    },
    {
      id: '3',
      sender: 'You',
      content: 'Yes, I\'m here! Ready to chat.',
      timestamp: new Date(Date.now() - 3500000),
      isOwn: true,
    },
  ]);
  
  const [currentChat, setCurrentChat] = useState<string | null>('alice-123');

  const sendMessage = (content: string) => {
    if (!content.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'You',
      content,
      timestamp: new Date(),
      isOwn: true,
    };
    
    setMessages(prev => [...prev, newMessage]);

    // Simulate reply after 2 seconds
    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'Alice',
        content: `Reply to: "${content}"`,
        timestamp: new Date(),
        isOwn: false,
      };
      setMessages(prev => [...prev, reply]);
    }, 2000);
  };

  return (
    <ChatContext.Provider value={{
      messages,
      sendMessage,
      currentChat,
      setCurrentChat,
    }}>
      {children}
    </ChatContext.Provider>
  );
};