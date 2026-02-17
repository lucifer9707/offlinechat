import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title = 'Offline Chat', showBack = false }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        {showBack && (
          <button className="icon-button" onClick={() => navigate(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="currentColor"/>
            </svg>
          </button>
        )}
        <h1>{title}</h1>
      </div>
      
      <div className="header-right">
        <button className="icon-button" onClick={() => navigate('/connect')} title="Connect to Peer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 10H17V7H14V5H17V2H19V5H22V7H19V10Z" fill="currentColor"/>
            <path d="M21 12V16C21 17.1 20.1 18 19 18H15.5C14.95 18 14.45 17.55 14 17C13.47 16.36 13 15.64 13 15V14.5C13 14.22 12.78 14 12.5 14H11.5C11.22 14 11 14.22 11 14.5V15C11 15.64 10.53 16.36 10 17C9.55 17.55 9.05 18 8.5 18H5C3.9 18 3 17.1 3 16V8C3 6.9 3.9 6 5 6H12V8H5V16H8.5C8.77 16 9.06 15.78 9.36 15.38C9.83 14.73 10 14.02 10 13.5C10 12.67 10.67 12 11.5 12H12.5C13.33 12 14 12.67 14 13.5C14 14.02 14.17 14.73 14.64 15.38C14.94 15.78 15.23 16 15.5 16H19V12H21Z" fill="currentColor"/>
          </svg>
        </button>
        
        <button className="icon-button" onClick={() => navigate('/settings')} title="Settings">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.64 2.57 9.6 2.81L9.24 5.35C8.65 5.59 8.12 5.92 7.62 6.29L5.23 5.33C5.01 5.25 4.76 5.33 4.64 5.55L2.72 8.87C2.6 9.08 2.65 9.34 2.84 9.48L4.87 11.06C4.82 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.65 21.43 9.85 21.6 10.09 21.6H13.93C14.17 21.6 14.37 21.43 14.41 21.19L14.77 18.65C15.36 18.41 15.89 18.09 16.39 17.71L18.78 18.67C19 18.75 19.25 18.67 19.37 18.45L21.29 15.13C21.4 14.92 21.35 14.66 21.17 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.4 13.98 8.4 12C8.4 10.02 10.02 8.4 12 8.4C13.98 8.4 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill="currentColor"/>
          </svg>
        </button>
        
        <button className="icon-button menu-button" onClick={() => setShowMenu(!showMenu)} title="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="currentColor"/>
          </svg>
        </button>
        
        {showMenu && (
          <div className="dropdown-menu">
            <button onClick={() => { navigate('/blockchain'); setShowMenu(false); }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" fill="currentColor"/>
              </svg>
              Blockchain View
            </button>
            <button onClick={() => { navigate('/settings'); setShowMenu(false); }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.64 2.57 9.6 2.81L9.24 5.35C8.65 5.59 8.12 5.92 7.62 6.29L5.23 5.33C5.01 5.25 4.76 5.33 4.64 5.55L2.72 8.87C2.6 9.08 2.65 9.34 2.84 9.48L4.87 11.06C4.82 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.65 21.43 9.85 21.6 10.09 21.6H13.93C14.17 21.6 14.37 21.43 14.41 21.19L14.77 18.65C15.36 18.41 15.89 18.09 16.39 17.71L18.78 18.67C19 18.75 19.25 18.67 19.37 18.45L21.29 15.13C21.4 14.92 21.35 14.66 21.17 14.52L19.14 12.94Z" fill="currentColor"/>
              </svg>
              Settings
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;