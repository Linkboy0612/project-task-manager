import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  CheckSquare, 
  Users, 
  BarChart3, 
  Settings, 
  X 
} from 'lucide-react';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: '仪表板', color: '#00d4ff' },
    { path: '/projects', icon: FolderKanban, label: '项目管理', color: '#7c3aed' },
    { path: '/tasks', icon: CheckSquare, label: '任务管理', color: '#10b981' },
    { path: '/team', icon: Users, label: '团队协作', color: '#f59e0b' },
    { path: '/analytics', icon: BarChart3, label: '数据分析', color: '#ef4444' },
  ];

  return (
    <>
      {/* 移动端遮罩 */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* 头部 */}
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <LayoutDashboard size={24} />
            </div>
            <span className="logo-text">TaskFlow Pro</span>
          </div>
          <button className="close-btn md:hidden" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* 导航菜单 */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={onClose}
                    style={{
                      '--nav-color': item.color
                    } as React.CSSProperties}
                  >
                    <Icon size={20} />
                    <span className="nav-text">{item.label}</span>
                    {isActive && <div className="active-indicator" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* 底部设置 */}
        <div className="sidebar-footer">
          <Link to="/settings" className="nav-link">
            <Settings size={20} />
            <span className="nav-text">设置</span>
          </Link>
          
          {/* 用户信息 */}
          <div className="user-info">
            <div className="user-avatar">H</div>
            <div className="user-details">
              <div className="user-name">Haiyin</div>
              <div className="user-role">项目经理</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
