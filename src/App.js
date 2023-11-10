import React from 'react';
import './App.css';

function App() {
  const projects = [
    { id: 1, title: 'Skillbuddy', description: 'https://t.me/SkillbuddyBot' },
    { id: 2, title: 'ASO AI', description: 'ТЗ проекта - https://inlnk.ru/dnyRv5. На данный момент проект у клиента и он доволен'},
    { id: 3, title: 'Фильтр постов в телеграме с ChatGPT ', description: 'https://t.me/filterpostsbot' },
    { id: 4, title: 'Предсказание цены фьючерсов с помощью ИИ', description: 'https://inlnk.ru/kXyLkE'},
    { id: 5, title: 'Koltso', description: 'Генератор маршрутов по городу на основе предпочтений человека - https://inlnk.ru/kXyLkE'},
    { id: 6, title: 'PANTHEON', description: 'https://www.pantheon.gold/'},



    // Добавьте свои проекты сюда
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>arklual</h1>
        <p>AI development; ChatGPT; Langchain; Machine Learning; Web3 / Smart contracts</p>
      </header>
      <section className="App-projects">
        <h2>My projects</h2>
        <div className="projects-list">
          {projects.map(project => (
            <div key={project.id} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
