import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Calendar, Download, Filter } from 'lucide-react';
import './Analytics.css';

const Analytics: React.FC = () => {
  // 项目进度数据
  const projectProgressData = [
    { name: '智能客服系统', 计划: 90, 实际: 85, 任务完成: 18 },
    { name: '移动端重构', 计划: 70, 实际: 62, 任务完成: 11 },
    { name: '数据分析平台', 计划: 95, 实际: 94, 任务完成: 14 },
    { name: '用户体验优化', 计划: 10, 实际: 0, 任务完成: 0 },
  ];

  // 团队效率数据
  const teamEfficiencyData = [
    { month: '1月', 完成任务: 45, 按时完成率: 85 },
    { month: '2月', 完成任务: 52, 按时完成率: 88 },
    { month: '3月', 完成任务: 48, 按时完成率: 82 },
    { month: '4月', 完成任务: 61, 按时完成率: 90 },
    { month: '5月', 完成任务: 58, 按时完成率: 87 },
    { month: '6月', 完成任务: 65, 按时完成率: 92 },
  ];

  // 任务状态分布
  const taskStatusData = [
    { name: '已完成', value: 156, color: '#10b981' },
    { name: '进行中', value: 89, color: '#f59e0b' },
    { name: '待开始', value: 43, color: '#64748b' },
    { name: '已阻塞', value: 12, color: '#ef4444' },
  ];

  // 部门工作负荷
  const departmentWorkloadData = [
    { department: '技术部', 成员数: 12, 平均负荷: 85, 活跃项目: 6 },
    { department: '产品部', 成员数: 8, 平均负荷: 78, 活跃项目: 4 },
    { department: '设计部', 成员数: 6, 平均负荷: 72, 活跃项目: 3 },
    { department: '数据部', 成员数: 4, 平均负荷: 68, 活跃项目: 2 },
    { department: '测试部', 成员数: 5, 平均负荷: 82, 活跃项目: 5 },
  ];

  const kpiData = [
    {
      title: '项目按时完成率',
      value: '87%',
      change: '+5%',
      changeType: 'positive',
      description: '相比上月提升'
    },
    {
      title: '团队平均效率',
      value: '92%',
      change: '+3%',
      changeType: 'positive',
      description: '任务完成质量'
    },
    {
      title: '资源利用率',
      value: '78%',
      change: '-2%',
      changeType: 'negative',
      description: '人员工作负荷'
    },
    {
      title: '客户满意度',
      value: '4.6/5.0',
      change: '+0.2',
      changeType: 'positive',
      description: '用户反馈评分'
    }
  ];

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <div className="analytics-title-section">
          <h1 className="analytics-title">数据分析</h1>
          <p className="analytics-subtitle">项目和团队绩效数据分析</p>
        </div>
        
        <div className="analytics-actions">
          <button className="btn btn-secondary">
            <Filter size={16} />
            筛选条件
          </button>
          <button className="btn btn-secondary">
            <Calendar size={16} />
            时间范围
          </button>
          <button className="btn btn-primary">
            <Download size={16} />
            导出报告
          </button>
        </div>
      </div>

      {/* KPI 指标 */}
      <div className="kpi-grid">
        {kpiData.map((kpi, index) => (
          <div key={index} className="kpi-card">
            <div className="kpi-header">
              <h3 className="kpi-title">{kpi.title}</h3>
              <div className={`kpi-change ${kpi.changeType}`}>
                {kpi.changeType === 'positive' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                <span>{kpi.change}</span>
              </div>
            </div>
            <div className="kpi-value">{kpi.value}</div>
            <div className="kpi-description">{kpi.description}</div>
          </div>
        ))}
      </div>

      {/* 图表区域 */}
      <div className="charts-grid">
        {/* 项目进度对比 */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">项目进度对比</h3>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-color" style={{ background: '#00d4ff' }}></div>
                <span>计划进度</span>
              </div>
              <div className="legend-item">
                <div className="legend-color" style={{ background: '#10b981' }}></div>
                <span>实际进度</span>
              </div>
            </div>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={projectProgressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                <XAxis dataKey="name" tick={{ fill: 'var(--text-secondary)' }} />
                <YAxis tick={{ fill: 'var(--text-secondary)' }} />
                <Tooltip 
                  contentStyle={{ 
                    background: 'var(--card-bg)', 
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem'
                  }} 
                />
                <Legend />
                <Bar dataKey="计划" fill="#00d4ff" radius={[2, 2, 0, 0]} />
                <Bar dataKey="实际" fill="#10b981" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 团队效率趋势 */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">团队效率趋势</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={teamEfficiencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                <XAxis dataKey="month" tick={{ fill: 'var(--text-secondary)' }} />
                <YAxis tick={{ fill: 'var(--text-secondary)' }} />
                <Tooltip 
                  contentStyle={{ 
                    background: 'var(--card-bg)', 
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem'
                  }} 
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="完成任务" 
                  stroke="#7c3aed" 
                  strokeWidth={3}
                  dot={{ fill: '#7c3aed', strokeWidth: 2, r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="按时完成率" 
                  stroke="#f59e0b" 
                  strokeWidth={3}
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 任务状态分布 */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">任务状态分布</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={taskStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {taskStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    background: 'var(--card-bg)', 
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 部门工作负荷 */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">部门工作负荷</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentWorkloadData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                <XAxis dataKey="department" tick={{ fill: 'var(--text-secondary)' }} />
                <YAxis tick={{ fill: 'var(--text-secondary)' }} />
                <Tooltip 
                  contentStyle={{ 
                    background: 'var(--card-bg)', 
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.5rem'
                  }} 
                />
                <Legend />
                <Bar dataKey="平均负荷" fill="#ef4444" radius={[2, 2, 0, 0]} />
                <Bar dataKey="成员数" fill="#00d4ff" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 数据表格 */}
      <div className="data-table-section">
        <div className="table-header">
          <h3 className="table-title">详细数据</h3>
          <button className="btn btn-secondary btn-sm">导出Excel</button>
        </div>
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>项目名称</th>
                <th>负责人</th>
                <th>进度</th>
                <th>任务数</th>
                <th>完成率</th>
                <th>预计完成</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>智能客服系统</td>
                <td>张三</td>
                <td>85%</td>
                <td>24</td>
                <td>75%</td>
                <td>2025-10-15</td>
                <td><span className="status-badge progress">进行中</span></td>
              </tr>
              <tr>
                <td>移动端APP重构</td>
                <td>李四</td>
                <td>62%</td>
                <td>18</td>
                <td>61%</td>
                <td>2025-11-20</td>
                <td><span className="status-badge progress">进行中</span></td>
              </tr>
              <tr>
                <td>数据分析平台</td>
                <td>王五</td>
                <td>94%</td>
                <td>15</td>
                <td>93%</td>
                <td>2025-09-30</td>
                <td><span className="status-badge success">即将完成</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
