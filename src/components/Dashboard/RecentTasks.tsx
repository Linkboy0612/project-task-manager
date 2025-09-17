import React from 'react';
import { Clock, User, AlertCircle } from 'lucide-react';
import './RecentTasks.css';

interface Task {
  id: number;
  title: string;
  project: string;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  status: '进行中' | '待开始' | '已完成';
}

interface RecentTasksProps {
  tasks: Task[];
}

const RecentTasks: React.FC<RecentTasksProps> = ({ tasks }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return '#ef4444';
      case 'medium':
        return '#f59e0b';
      case 'low':
        return '#10b981';
      default:
        return '#64748b';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '进行中':
        return '#f59e0b';
      case '待开始':
        return '#64748b';
      case '已完成':
        return '#10b981';
      default:
        return '#64748b';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high':
        return '高';
      case 'medium':
        return '中';
      case 'low':
        return '低';
      default:
        return '';
    }
  };

  return (
    <div className="recent-tasks">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <div className="task-priority-indicator" 
               style={{ background: getPriorityColor(task.priority) }}>
          </div>
          
          <div className="task-content">
            <div className="task-header">
              <h4 className="task-title">{task.title}</h4>
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
            </div>
            
            <div className="task-meta">
              <div className="task-project">
                <span className="project-label">项目：</span>
                <span className="project-name">{task.project}</span>
              </div>
              
              <div className="task-details">
                <div className="task-assignee">
                  <User size={14} />
                  <span>{task.assignee}</span>
                </div>
                <div className="task-due-date">
                  <Clock size={14} />
                  <span>{task.dueDate}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="task-actions">
            <button className="task-action-btn">
              <AlertCircle size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentTasks;
