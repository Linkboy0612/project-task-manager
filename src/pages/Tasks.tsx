import React, { useState } from 'react';
import { Plus, Search, Filter, Calendar, User, Clock, AlertCircle } from 'lucide-react';
import './Tasks.css';

const Tasks: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const tasks = [
    {
      id: 1,
      title: '完善用户界面设计',
      description: '优化登录页面和主页的用户体验，包括响应式布局和交互效果',
      project: '智能客服系统',
      assignee: '张三',
      priority: 'high',
      status: '进行中',
      dueDate: '2025-09-18',
      estimatedHours: 16,
      spentHours: 12,
      tags: ['UI/UX', '前端']
    },
    {
      id: 2,
      title: 'API接口开发',
      description: '开发用户认证相关的RESTful API接口',
      project: '移动端APP重构',
      assignee: '李四',
      priority: 'high',
      status: '待开始',
      dueDate: '2025-09-20',
      estimatedHours: 24,
      spentHours: 0,
      tags: ['后端', 'API']
    },
    {
      id: 3,
      title: '数据库优化',
      description: '优化查询性能，添加必要的索引和分区',
      project: '数据分析平台',
      assignee: '王五',
      priority: 'medium',
      status: '已完成',
      dueDate: '2025-09-15',
      estimatedHours: 8,
      spentHours: 6,
      tags: ['数据库', '性能']
    },
    {
      id: 4,
      title: '移动端适配',
      description: '确保应用在各种移动设备上的兼容性和响应性',
      project: '移动端APP重构',
      assignee: '赵六',
      priority: 'medium',
      status: '进行中',
      dueDate: '2025-09-25',
      estimatedHours: 20,
      spentHours: 8,
      tags: ['移动端', '兼容性']
    },
    {
      id: 5,
      title: '用户测试',
      description: '组织用户进行产品测试，收集反馈意见',
      project: '用户体验优化',
      assignee: '钱七',
      priority: 'low',
      status: '规划中',
      dueDate: '2025-10-05',
      estimatedHours: 12,
      spentHours: 0,
      tags: ['测试', '用户体验']
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#64748b';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '进行中': return '#f59e0b';
      case '待开始': return '#64748b';
      case '已完成': return '#10b981';
      case '规划中': return '#7c3aed';
      case '已阻塞': return '#ef4444';
      default: return '#64748b';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return '高';
      case 'medium': return '中';
      case 'low': return '低';
      default: return '';
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.assignee.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || task.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <div className="tasks-title-section">
          <h1 className="tasks-title">任务管理</h1>
          <p className="tasks-subtitle">跟踪和管理所有任务进度</p>
        </div>
        
        <div className="tasks-actions">
          <button className="btn btn-primary">
            <Plus size={16} />
            新建任务
          </button>
        </div>
      </div>

      <div className="tasks-toolbar">
        <div className="search-filter-section">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="搜索任务..."
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
              <option value="待开始">待开始</option>
              <option value="已完成">已完成</option>
              <option value="规划中">规划中</option>
              <option value="已阻塞">已阻塞</option>
            </select>
          </div>
        </div>
      </div>

      <div className="tasks-grid">
        {filteredTasks.map((task) => (
          <div key={task.id} className="task-card">
            <div className="task-card-header">
              <div className="task-badges">
                <span 
                  className="priority-badge"
                  style={{ 
                    background: `${getPriorityColor(task.priority)}20`,
                    color: getPriorityColor(task.priority)
                  }}
                >
                  {getPriorityLabel(task.priority)}优先级
                </span>
                <span 
                  className="status-badge"
                  style={{ 
                    background: `${getStatusColor(task.status)}20`,
                    color: getStatusColor(task.status)
                  }}
                >
                  {task.status}
                </span>
              </div>
              
              <div className="task-priority-indicator" 
                   style={{ background: getPriorityColor(task.priority) }}>
              </div>
            </div>
            
            <div className="task-card-content">
              <h3 className="task-card-title">{task.title}</h3>
              <p className="task-card-description">{task.description}</p>
              
              <div className="task-project">
                <span className="project-label">项目：</span>
                <span className="project-name">{task.project}</span>
              </div>
              
              <div className="task-tags">
                {task.tags.map((tag, index) => (
                  <span key={index} className="task-tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="task-card-footer">
              <div className="task-meta">
                <div className="meta-item">
                  <User size={14} />
                  <span>{task.assignee}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>{task.dueDate}</span>
                </div>
                <div className="meta-item">
                  <Clock size={14} />
                  <span>{task.spentHours}h / {task.estimatedHours}h</span>
                </div>
              </div>
              
              <div className="task-progress">
                <div className="progress-text">
                  {Math.round((task.spentHours / task.estimatedHours) * 100)}%
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${Math.min((task.spentHours / task.estimatedHours) * 100, 100)}%`,
                      background: getStatusColor(task.status)
                    }}
                  ></div>
                </div>
              </div>
            </div>
            
            {task.dueDate === '2025-09-18' && (
              <div className="task-alert">
                <AlertCircle size={14} />
                <span>今天截止</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
