import React from 'react';
import { Calendar, Users } from 'lucide-react';
import './ProjectProgress.css';

interface Project {
  id: number;
  name: string;
  department: string;
  progress: number;
  status: string;
  dueDate: string;
  team: string[];
}

interface ProjectProgressProps {
  projects: Project[];
}

const ProjectProgress: React.FC<ProjectProgressProps> = ({ projects }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case '进行中':
        return '#f59e0b';
      case '即将完成':
        return '#10b981';
      case '已延期':
        return '#ef4444';
      default:
        return '#64748b';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return '#10b981';
    if (progress >= 70) return '#f59e0b';
    if (progress >= 50) return '#00d4ff';
    return '#ef4444';
  };

  return (
    <div className="project-progress">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-header">
            <div className="project-info">
              <h4 className="project-name">{project.name}</h4>
              <div className="project-meta">
                <span className="project-department">{project.department}</span>
                <span 
                  className="project-status"
                  style={{ color: getStatusColor(project.status) }}
                >
                  {project.status}
                </span>
              </div>
            </div>
            <div className="project-progress-circle">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle
                  cx="30"
                  cy="30"
                  r="25"
                  fill="none"
                  stroke="var(--border-color)"
                  strokeWidth="4"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="25"
                  fill="none"
                  stroke={getProgressColor(project.progress)}
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 25}`}
                  strokeDashoffset={`${2 * Math.PI * 25 * (1 - project.progress / 100)}`}
                  strokeLinecap="round"
                  transform="rotate(-90 30 30)"
                />
              </svg>
              <span className="progress-text">{project.progress}%</span>
            </div>
          </div>
          
          <div className="project-progress-bar">
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill"
                style={{ 
                  width: `${project.progress}%`,
                  background: getProgressColor(project.progress)
                }}
              ></div>
            </div>
          </div>
          
          <div className="project-footer">
            <div className="project-due-date">
              <Calendar size={14} />
              <span>截止：{project.dueDate}</span>
            </div>
            <div className="project-team">
              <Users size={14} />
              <span>{project.team.length}人团队</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectProgress;
