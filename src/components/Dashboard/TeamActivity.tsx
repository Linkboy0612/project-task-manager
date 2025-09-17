import React from 'react';
import { CheckCircle, Clock, UserPlus, FileText } from 'lucide-react';
import './TeamActivity.css';

const TeamActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'task_completed',
      user: '张三',
      action: '完成了任务',
      target: '用户界面设计',
      time: '2分钟前',
      icon: CheckCircle,
      color: '#10b981'
    },
    {
      id: 2,
      type: 'task_started',
      user: '李四',
      action: '开始了任务',
      target: 'API接口开发',
      time: '5分钟前',
      icon: Clock,
      color: '#f59e0b'
    },
    {
      id: 3,
      type: 'member_joined',
      user: '王五',
      action: '加入了项目',
      target: '智能客服系统',
      time: '10分钟前',
      icon: UserPlus,
      color: '#7c3aed'
    },
    {
      id: 4,
      type: 'document_updated',
      user: '赵六',
      action: '更新了文档',
      target: '技术规范文档',
      time: '15分钟前',
      icon: FileText,
      color: '#00d4ff'
    },
    {
      id: 5,
      type: 'task_completed',
      user: '钱七',
      action: '完成了任务',
      target: '数据库优化',
      time: '30分钟前',
      icon: CheckCircle,
      color: '#10b981'
    }
  ];

  return (
    <div className="team-activity">
      <div className="activity-timeline">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="activity-item">
              <div className="activity-icon" style={{ background: `${activity.color}20`, color: activity.color }}>
                <Icon size={16} />
              </div>
              
              <div className="activity-content">
                <div className="activity-text">
                  <span className="activity-user">{activity.user}</span>
                  <span className="activity-action">{activity.action}</span>
                  <span className="activity-target">"{activity.target}"</span>
                </div>
                <div className="activity-time">{activity.time}</div>
              </div>
              
              {index < activities.length - 1 && <div className="activity-line"></div>}
            </div>
          );
        })}
      </div>
      
      <div className="activity-footer">
        <button className="btn btn-secondary btn-sm">查看全部活动</button>
      </div>
    </div>
  );
};

export default TeamActivity;
