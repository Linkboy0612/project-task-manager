import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Users, 
  FolderKanban, 
  CheckSquare, 
  AlertTriangle,
  Target 
} from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';
import ProjectProgress from '../components/Dashboard/ProjectProgress';
import RecentTasks from '../components/Dashboard/RecentTasks';
import TeamActivity from '../components/Dashboard/TeamActivity';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const statsData = [
    {
      title: '总项目数',
      value: '24',
      change: '+12%',
      changeType: 'positive' as const,
      icon: FolderKanban,
      color: '#7c3aed'
    },
    {
      title: '进行中任务',
      value: '156',
      change: '+8%',
      changeType: 'positive' as const,
      icon: CheckSquare,
      color: '#10b981'
    },
    {
      title: '团队成员',
      value: '32',
      change: '+3',
      changeType: 'positive' as const,
      icon: Users,
      color: '#f59e0b'
    },
    {
      title: '项目完成率',
      value: '87%',
      change: '+5%',
      changeType: 'positive' as const,
      icon: Target,
      color: '#00d4ff'
    }
  ];

  const projectData = [
    {
      id: 1,
      name: '智能客服系统',
      department: '技术部',
      progress: 85,
      status: '进行中',
      dueDate: '2025-10-15',
      team: ['张三', '李四', '王五']
    },
    {
      id: 2,
      name: '移动端APP重构',
      department: '产品部',
      progress: 62,
      status: '进行中',
      dueDate: '2025-11-20',
      team: ['赵六', '钱七', '孙八']
    },
    {
      id: 3,
      name: '数据分析平台',
      department: '数据部',
      progress: 94,
      status: '即将完成',
      dueDate: '2025-09-30',
      team: ['周九', '吴十']
    }
  ];

  const recentTasks = [
    {
      id: 1,
      title: '完善用户界面设计',
      project: '智能客服系统',
      assignee: '张三',
      priority: 'high' as const,
      dueDate: '今天',
      status: '进行中' as const
    },
    {
      id: 2,
      title: 'API接口开发',
      project: '移动端APP重构',
      assignee: '李四',
      priority: 'medium' as const,
      dueDate: '明天',
      status: '待开始' as const
    },
    {
      id: 3,
      title: '数据库优化',
      project: '数据分析平台',
      assignee: '王五',
      priority: 'low' as const,
      dueDate: '2天后',
      status: '已完成' as const
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">项目概览</h1>
          <p className="dashboard-subtitle">
            欢迎回来，Haiyin！今天您有 <span className="highlight">8个任务</span> 需要处理
          </p>
        </div>
        <div className="dashboard-actions">
          <button className="btn btn-secondary">
            <BarChart3 size={16} />
            生成报告
          </button>
          <button className="btn btn-primary">
            <FolderKanban size={16} />
            新建项目
          </button>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* 主要内容区域 */}
      <div className="dashboard-content">
        <div className="dashboard-left">
          {/* 项目进度 */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">项目进度概览</h3>
              <div className="flex gap-2">
                <div className="legend-item">
                  <div className="legend-color" style={{ background: '#10b981' }}></div>
                  <span>已完成</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ background: '#f59e0b' }}></div>
                  <span>进行中</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ background: '#ef4444' }}></div>
                  <span>延期</span>
                </div>
              </div>
            </div>
            <ProjectProgress projects={projectData} />
          </div>

          {/* 最近任务 */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">最近任务</h3>
              <button className="btn btn-secondary btn-sm">查看全部</button>
            </div>
            <RecentTasks tasks={recentTasks} />
          </div>
        </div>

        <div className="dashboard-right">
          {/* 团队活动 */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">团队活动</h3>
              <div className="flex items-center gap-2 text-sm text-secondary">
                <Clock size={14} />
                <span>实时更新</span>
              </div>
            </div>
            <TeamActivity />
          </div>

          {/* 风险预警 */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">风险预警</h3>
              <AlertTriangle size={16} className="text-warning" />
            </div>
            <div className="risk-alerts">
              <div className="risk-item">
                <div className="risk-icon warning">
                  <Clock size={14} />
                </div>
                <div className="risk-content">
                  <div className="risk-title">智能客服系统可能延期</div>
                  <div className="risk-desc">当前进度85%，距离截止日期还有5天</div>
                </div>
              </div>
              <div className="risk-item">
                <div className="risk-icon info">
                  <Users size={14} />
                </div>
                <div className="risk-content">
                  <div className="risk-title">团队资源分配不均</div>
                  <div className="risk-desc">建议重新分配任务以平衡工作负荷</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
