import React from 'react';
import { Plus, Search, Filter, Mail, Phone, MapPin, Star } from 'lucide-react';
import './Team.css';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Haiyin',
      role: '项目经理',
      department: '技术部',
      email: 'haiyin@company.com',
      phone: '+86 138-0000-0000',
      location: '北京',
      avatar: 'H',
      status: 'online',
      workload: 85,
      skills: ['项目管理', '团队协作', '敏捷开发'],
      currentTasks: 8,
      completedTasks: 42,
      rating: 4.9
    },
    {
      id: 2,
      name: '张三',
      role: '前端开发工程师',
      department: '技术部',
      email: 'zhangsan@company.com',
      phone: '+86 139-0000-0000',
      location: '上海',
      avatar: '张',
      status: 'online',
      workload: 75,
      skills: ['React', 'Vue.js', 'TypeScript', 'UI/UX'],
      currentTasks: 6,
      completedTasks: 28,
      rating: 4.7
    },
    {
      id: 3,
      name: '李四',
      role: '后端开发工程师',
      department: '技术部',
      email: 'lisi@company.com',
      phone: '+86 150-0000-0000',
      location: '深圳',
      avatar: '李',
      status: 'busy',
      workload: 90,
      skills: ['Node.js', 'Python', 'MySQL', 'Redis'],
      currentTasks: 9,
      completedTasks: 35,
      rating: 4.8
    },
    {
      id: 4,
      name: '王五',
      role: '数据分析师',
      department: '数据部',
      email: 'wangwu@company.com',
      phone: '+86 151-0000-0000',
      location: '北京',
      avatar: '王',
      status: 'offline',
      workload: 60,
      skills: ['Python', 'SQL', '数据可视化', '机器学习'],
      currentTasks: 4,
      completedTasks: 23,
      rating: 4.6
    },
    {
      id: 5,
      name: '赵六',
      role: 'UI/UX设计师',
      department: '设计部',
      email: 'zhaoliu@company.com',
      phone: '+86 152-0000-0000',
      location: '杭州',
      avatar: '赵',
      status: 'online',
      workload: 70,
      skills: ['Figma', 'Sketch', '用户体验', '原型设计'],
      currentTasks: 5,
      completedTasks: 19,
      rating: 4.5
    },
    {
      id: 6,
      name: '钱七',
      role: '测试工程师',
      department: '技术部',
      email: 'qianqi@company.com',
      phone: '+86 153-0000-0000',
      location: '广州',
      avatar: '钱',
      status: 'busy',
      workload: 80,
      skills: ['自动化测试', 'Selenium', '性能测试', 'API测试'],
      currentTasks: 7,
      completedTasks: 31,
      rating: 4.4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return '#10b981';
      case 'busy': return '#f59e0b';
      case 'offline': return '#64748b';
      default: return '#64748b';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'online': return '在线';
      case 'busy': return '忙碌';
      case 'offline': return '离线';
      default: return '未知';
    }
  };

  const getWorkloadColor = (workload: number) => {
    if (workload >= 90) return '#ef4444';
    if (workload >= 75) return '#f59e0b';
    if (workload >= 50) return '#10b981';
    return '#00d4ff';
  };

  return (
    <div className="team-page">
      <div className="team-header">
        <div className="team-title-section">
          <h1 className="team-title">团队协作</h1>
          <p className="team-subtitle">管理团队成员和协作关系</p>
        </div>
        
        <div className="team-actions">
          <button className="btn btn-secondary">
            <Mail size={16} />
            发送通知
          </button>
          <button className="btn btn-primary">
            <Plus size={16} />
            邀请成员
          </button>
        </div>
      </div>

      <div className="team-toolbar">
        <div className="search-filter-section">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="搜索团队成员..."
              className="search-input"
            />
          </div>
          
          <div className="filter-section">
            <Filter size={16} />
            <select className="filter-select">
              <option value="all">全部部门</option>
              <option value="技术部">技术部</option>
              <option value="产品部">产品部</option>
              <option value="设计部">设计部</option>
              <option value="数据部">数据部</option>
            </select>
          </div>
        </div>
        
        <div className="team-stats">
          <div className="stat-item">
            <span className="stat-value">{teamMembers.length}</span>
            <span className="stat-label">总成员</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{teamMembers.filter(m => m.status === 'online').length}</span>
            <span className="stat-label">在线</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{teamMembers.reduce((sum, m) => sum + m.currentTasks, 0)}</span>
            <span className="stat-label">活跃任务</span>
          </div>
        </div>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="member-card">
            <div className="member-card-header">
              <div className="member-avatar-section">
                <div className="member-avatar">{member.avatar}</div>
                <div className={`status-indicator ${member.status}`} 
                     style={{ background: getStatusColor(member.status) }}>
                </div>
              </div>
              
              <div className="member-rating">
                <Star size={14} className="star-icon" />
                <span>{member.rating}</span>
              </div>
            </div>
            
            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-department">{member.department}</p>
            </div>
            
            <div className="member-status-section">
              <div className="status-badge" style={{ color: getStatusColor(member.status) }}>
                {getStatusLabel(member.status)}
              </div>
              <div className="workload-section">
                <span className="workload-label">工作负荷</span>
                <div className="workload-bar">
                  <div 
                    className="workload-fill"
                    style={{ 
                      width: `${member.workload}%`,
                      background: getWorkloadColor(member.workload)
                    }}
                  ></div>
                </div>
                <span className="workload-value">{member.workload}%</span>
              </div>
            </div>
            
            <div className="member-tasks">
              <div className="task-stat">
                <span className="task-count">{member.currentTasks}</span>
                <span className="task-label">当前任务</span>
              </div>
              <div className="task-stat">
                <span className="task-count">{member.completedTasks}</span>
                <span className="task-label">已完成</span>
              </div>
            </div>
            
            <div className="member-skills">
              <div className="skills-label">技能标签</div>
              <div className="skills-list">
                {member.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
                {member.skills.length > 3 && (
                  <span className="skill-more">+{member.skills.length - 3}</span>
                )}
              </div>
            </div>
            
            <div className="member-contact">
              <div className="contact-item">
                <Mail size={14} />
                <span>{member.email}</span>
              </div>
              <div className="contact-item">
                <Phone size={14} />
                <span>{member.phone}</span>
              </div>
              <div className="contact-item">
                <MapPin size={14} />
                <span>{member.location}</span>
              </div>
            </div>
            
            <div className="member-actions">
              <button className="action-btn">分配任务</button>
              <button className="action-btn secondary">发送消息</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
