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
          <li onClick={() => onMenuSelected('settings')}>設定</li>
          <li onClick={() => onMenuSelected('top')}>/HTML</li>
          <li onClick={() => onMenuSelected('chat')}>/BBS</li>
        </ul>
        </header>
      </div>
      );
}

export default Header;