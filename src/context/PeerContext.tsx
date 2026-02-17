import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define what a Peer looks like
export interface Peer {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'away';
  lastSeen?: Date;
}

// Define what our context will provide
interface PeerContextType {
  peers: Peer[];
  discoverPeers: () => void;
  isScanning: boolean;
}

// Create the context
const PeerContext = createContext<PeerContextType | undefined>(undefined);

// Custom hook to use the peer context
export const usePeers = () => {
  const context = useContext(PeerContext);
  if (!context) {
    throw new Error('usePeers must be used within a PeerProvider');
  }
  return context;
};

// Provider component
interface PeerProviderProps {
  children: ReactNode;
}

export const PeerProvider: React.FC<PeerProviderProps> = ({ children }) => {
  // Sample peers data
  const [peers] = useState<Peer[]>([
    { id: 'alice-123', name: 'Alice', status: 'online', lastSeen: new Date() },
    { id: 'bob-456', name: 'Bob', status: 'online', lastSeen: new Date() },
    { id: 'charlie-789', name: 'Charlie', status: 'away', lastSeen: new Date() },
  ]);
  
  const [isScanning] = useState(false);

  const discoverPeers = () => {
    console.log('Discovering peers...');
  };

  return (
    <PeerContext.Provider value={{
      peers,
      discoverPeers,
      isScanning,
    }}>
      {children}
    </PeerContext.Provider>
  );
};