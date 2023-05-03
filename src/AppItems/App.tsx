import React, { useState } from 'react';
import Overview from './Overview';
import Usage from './Usage';
import Settings from './Settings';
import Top from './TextApp';
import Chat from './ChatApp';

interface AppProps {
  selectedMenu: string;
}

const App: React.FC<AppProps> = ({ selectedMenu }) => {
  const renderContent = () => {
    switch (selectedMenu) {
      case 'overview':
        return <Overview />;
      case 'usage':
        return <Usage />;
        case 'settings':
          return <Settings />;
        case 'chat':
          return <Chat />;
        default:
        return <Top />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default App;