import React, { useState } from "react";
import "./TextApp.css";

interface HeaderProps {
    onMenuSelected: (menu: string) => void;
  }

const Header: React.FC<HeaderProps> = ({ onMenuSelected }) => {
    return (
      <div className="weapper">
        <header className="Header">
            <h1 className="title">satop</h1>
          <ul>
          <li onClick={() => onMenuSelected('overview')}>概要</li>
          <li onClick={() => onMenuSelected('usage')}>使い方</li>
          <li onClick={() => onMenuSelected('top')}>/Tags</li>
          <li onClick={() => onMenuSelected('chat')}>/BBS</li>
          <li onClick={() => onMenuSelected('chatC')}>/Test</li>
        </ul>
        </header>
      </div>
      );
}

export default Header;