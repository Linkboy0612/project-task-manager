import React, { useState } from 'react';
import { Plus, Search, Filter, Calendar, Users, MoreVertical } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    {
      id: 1,
      name: '智能客服系统',
      description: '基于AI的智能客服平台，提供7x24小时服务',
      department: '技术部',
      status: '进行中',
      progress: 85,
      startDate: '2025-08-01',
      endDate: '2025-10-15',
      team: ['张三', '李四', '王五', '赵六'],
      tasks: 24,
      completedTasks: 18
    },
    {
      id: 2,
      name: '移动端APP重构',
      description: '重构现有移动应用，提升用户体验和性能',
      department: '产品部',
      status: '进行中',
      progress: 62,
      startDate: '2025-09-01',
      endDate: '2025-11-20',
      team: ['钱七', '孙八', '周九'],
      tasks: 18,
      completedTasks: 11
    },
    {
      id: 3,
      name: '数据分析平台',
      description: '构建企业级数据分析和可视化平台',
      department: '数据部',
      status: '即将完成',
      progress: 94,
      startDate: '2025-07-15',
      endDate: '2025-09-30',
      team: ['吴十', '郑十一'],
      tasks: 15,
      completedTasks: 14
    },
    {
      id: 4,
      name: '用户体验优化',
      description: '全面优化产品用户体验，提升用户满意度',
      department: '设计部',
      status: '规划中',
      progress: 0,
      startDate: '2025-10-01',
      endDate: '2025-12-31',
      team: ['王十二', '李十三'],
      tasks: 8,
      completedTasks: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '进行中': return '#f59e0b';
      case '即将完成': return '#10b981';
      case '规划中': return '#64748b';
      case '已完成': return '#10b981';
      case '已暂停': return '#ef4444';
      default: return '#64748b';
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="projects-title-section">
          <h1 className="projects-title">项目管理</h1>
          <p className="projects-subtitle">管理和跟踪所有项目进度</p>
        </div>
        
        <div className="projects-actions">
          <button className="btn btn-primary">
            <Plus size={16} />
            新建项目
          </button>
        </div>
      </div>

      <div className="projects-toolbar">
        <div className="search-filter-section">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="搜索项目..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-section">
            <Filter size={16} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">全部状态</option>
              <option value="进行中">进行中</option>
              <option value="即将完成">即将完成</option>
              <option value="规划中">规划中</option>
              <option value="已完成">已完成</option>
              <option value="已暂停">已暂停</option>
            </select>
          </div>
        </div>
        
        <div className="view-options">
          <button className="view-btn active">网格视图</button>
          <button className="view-btn">列表视图</button>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-header">
              <div className="project-status-badge" 
                   style={{ background: `${getStatusColor(project.status)}20`, color: getStatusColor(project.status) }}>
                {project.status}
              </div>
              <button className="project-menu-btn">
                <MoreVertical size={16} />
              </button>
            </div>
            
            <div className="project-card-content">
              <h3 className="project-card-title">{project.name}</h3>
              <p className="project-card-description">{project.description}</p>
              
              <div className="project-department">
                <span className="department-label">部门：</span>
                <span className="department-value">{project.department}</span>
              </div>
              
              <div className="project-progress-section">
                <div className="progress-header">
                  <span className="progress-label">进度</span>
                  <span className="progress-percentage">{project.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${project.progress}%`,
                      background: getStatusColor(project.status)
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="project-stats">
                <div className="stat-item">
                  <span className="stat-value">{project.completedTasks}/{project.tasks}</span>
                  <span className="stat-label">任务</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{project.team.length}</span>
                  <span className="stat-label">成员</span>
                </div>
              </div>
            </div>
            
            <div className="project-card-footer">
              <div className="project-dates">
                <div className="date-item">
                  <Calendar size={14} />
                  <span>{project.startDate} - {project.endDate}</span>
                </div>
              </div>
              
              <div className="project-team-avatars">
                <Users size={14} />
                <span>{project.team.length}人</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
