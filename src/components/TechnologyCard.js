import React from 'react';
import './TechnologyCard.css';

function TechnologyCard({ title, description, status }) {
  const getStatusText = () => {
    switch (status) {
      case 'completed':
        return '✅ Изучено';
      case 'in-progress':
        return '🔄 В процессе';
      case 'not-started':
        return '⏳ Не начато';
      default:
        return '❓ Неизвестно';
    }
  };

  const getStatusClass = () => {
    return `technology-card status-${status}`;
  };

  const getStatusDescription = () => {
    switch (status) {
      case 'completed':
        return 'Технология полностью освоена';
      case 'in-progress':
        return 'Изучение в активной фазе';
      case 'not-started':
        return 'Еще не приступали к изучению';
      default:
        return '';
    }
  };

  return (
    <div className={getStatusClass()}>
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="status-badge">{getStatusText()}</span>
      </div>
      <div className="card-body">
        <p className="card-description">{description}</p>
        <div className="status-info">
          <span className="status-hint">{getStatusDescription()}</span>
        </div>
      </div>
      <div className="card-footer">
        <div className="progress-indicator">
          <div className={`progress-bar ${status}`}></div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyCard;
