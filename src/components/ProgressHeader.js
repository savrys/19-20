import React from 'react';
import './ProgressHeader.css';

function ProgressHeader({ technologies }) {
  const total = technologies.length;
  const completed = technologies.filter(tech => tech.status === 'completed').length;
  const inProgress = technologies.filter(tech => tech.status === 'in-progress').length;
  const notStarted = technologies.filter(tech => tech.status === 'not-started').length;
  
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="progress-header">
      <div className="stats-overview">
        <h2>📊 Общая статистика</h2>
        <p>Отслеживайте ваш прогресс в реальном времени</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-icon">📚</div>
          <div className="stat-number">{total}</div>
          <div className="stat-label">Всего технологий</div>
        </div>
        
        <div className="stat-card completed">
          <div className="stat-icon">✅</div>
          <div className="stat-number">{completed}</div>
          <div className="stat-label">Изучено</div>
        </div>
        
        <div className="stat-card in-progress">
          <div className="stat-icon">🔄</div>
          <div className="stat-number">{inProgress}</div>
          <div className="stat-label">В процессе</div>
        </div>
        
        <div className="stat-card not-started">
          <div className="stat-icon">⏳</div>
          <div className="stat-number">{notStarted}</div>
          <div className="stat-label">Не начато</div>
        </div>
      </div>
      
      <div className="progress-section">
        <div className="progress-info">
          <span className="progress-text">Общий прогресс изучения</span>
          <span className="progress-percentage">{completionPercentage}%</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="main-progress-bar" 
            style={{ width: `${completionPercentage}%` }}
          >
            <div className="progress-fill"></div>
          </div>
        </div>
        <div className="progress-details">
          <span>{completed} из {total} технологий освоено</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressHeader;
