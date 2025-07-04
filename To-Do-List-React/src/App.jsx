import React, { useContext } from 'react';
import { TodoProvider, TodoContext } from './TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './index.css';

const AppContent = () => {
  const { clearCompleted, darkMode, toggleDarkMode } = useContext(TodoContext);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <h1>To-Do List</h1>
      <button onClick={toggleDarkMode} className="btn small-btn ml-10">
        {darkMode ? '☀️ Light Mode' :'🌙 Dark Mode'}
      </button>
      <TodoForm />
      <TodoList />
      <button onClick={clearCompleted} className="btn clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

const App = () => (
  <TodoProvider>
    <AppContent />
  </TodoProvider>
);

export default App;
