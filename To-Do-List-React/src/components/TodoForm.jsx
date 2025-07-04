import React, { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        className="input"
      />
      <button type="submit" className="btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
