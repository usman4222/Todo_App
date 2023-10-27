import React from 'react';

const Todo = ({ text, updateMode, deleteTodo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <div className='icon'>
          <i className="fas fa-pen-to-square" onClick={updateMode}></i>
        </div>
        <div className='icon'>
          <i className="fas fa-trash-can" onClick={deleteTodo}></i>
        </div>
      </div>
    </div>
  );
}

export default Todo;
