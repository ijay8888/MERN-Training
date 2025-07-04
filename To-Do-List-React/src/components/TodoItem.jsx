import React, { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';

const TodoItem = ({ todo }) => {
  const { toggleTodo, removeTodo, editTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div className="actions">
        <button onClick={handleEdit} className="edit-btn">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => removeTodo(todo.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
