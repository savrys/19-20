import React from 'react';
import './App.css';
import TechnologyCard from './components/TechnologyCard';
import ProgressHeader from './components/ProgressHeader';

function App() {
  const technologies = [
    { 
      id: 1, 
      title: 'React Components', 
      description: 'Изучение базовых компонентов и их жизненного цикла', 
      status: 'completed' 
    },
    { 
      id: 2, 
      title: 'JSX Syntax', 
      description: 'Освоение синтаксиса JSX и его особенностей', 
      status: 'in-progress' 
    },
    { 
      id: 3, 
      title: 'State Management', 
      description: 'Работа с состоянием компонентов', 
      status: 'not-started' 
    },
    { 
      id: 4, 
      title: 'Props System', 
      description: 'Передача данных между компонентами', 
      status: 'not-started' 
    },
    { 
      id: 5, 
      title: 'Event Handling', 
      description: 'Обработка событий в React', 
      status: 'not-started' 
    },
    { 
      id: 6, 
      title: 'React Hooks', 
      description: 'Использование хуков для управления состоянием', 
      status: 'not-started' 
    }
  ];

  return (
    <div className="App">
      <header className="app-header">
        <div className="container">
          <h1>🚀 Трекер изучения технологий</h1>
          <p>Отслеживайте ваш прогресс в изучении веб-разработки</p>
        </div>
      </header>
      
      <div className="container">
        <ProgressHeader technologies={technologies} />
        
        <main className="technologies-container">
          <h2>Дорожная карта изучения</h2>
          <div className="technologies-grid">
            {technologies.map(tech => (
              <TechnologyCard
                key={tech.id}
                title={tech.title}
                description={tech.description}
                status={tech.status}
              />
            ))}
          </div>
        </main>
      </div>
      
      <footer className="app-footer">
        <div className="container">
          <p>© 2024 Трекер технологий. Практическое занятие 19.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
