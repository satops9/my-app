import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppItems/App';
import Header from './AppItems/Header';
import reportWebVitals from './reportWebVitals';

const Root: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('chat');

  return (
    <React.StrictMode>
      <Header onMenuSelected={(menu) => setSelectedMenu(menu)} />
      <App  selectedMenu={selectedMenu}/>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Root />);

reportWebVitals();