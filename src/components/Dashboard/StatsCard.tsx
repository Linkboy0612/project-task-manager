import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import './StatsCard.css';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color
}) => {
  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <div className="stats-icon" style={{ background: `${color}20`, color }}>
          <Icon size={24} />
        </div>
        <div className={`stats-change ${changeType}`}>
          {changeType === 'positive' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{change}</span>
        </div>
      </div>
      
      <div className="stats-content">
        <div className="stats-value">{value}</div>
        <div className="stats-title">{title}</div>
      </div>
      
      <div className="stats-indicator" style={{ background: color }}></div>
    </div>
  );
};

export default StatsCard;
