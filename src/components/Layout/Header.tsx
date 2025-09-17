import React from 'react';
import { Menu, Search, Bell, Settings, User } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn md:hidden" onClick={onMenuClick}>
          <Menu size={20} />
        </button>
        
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="搜索项目、任务或成员..."
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        {/* 通知 */}
        <div className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </div>

        {/* 设置 */}
        <button className="header-icon-btn">
          <Settings size={20} />
        </button>

        {/* 用户菜单 */}
        <div className="user-menu">
          <div className="user-avatar">
            <User size={16} />
          </div>
          <div className="user-info-header">
            <span className="user-name">Haiyin</span>
            <span className="user-role">项目经理</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
