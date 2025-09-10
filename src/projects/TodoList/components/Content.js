import React from 'react';

function Content({ todoItems, addNewTodo, setNewTodo, isTodoComplete, deleteTodoItem, handleSubmit, searchTodo, setsearchTodo, darkMode }) {
  return (
    <div className="content">
      <input
        className="search"
        type="text"
        placeholder="Search todos..."
        value={searchTodo}
        onChange={(e) => setsearchTodo(e.target.value)}
      />

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Add a new todo"
          value={addNewTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="add-btn">Add</button>
      </form>

      {todoItems.length ? (
        <div className="todo-list">
          {todoItems.map((item) => (
            <div className="todo-item" key={item.id}>
              <label className="checkbox-container">
                <input type="checkbox" checked={item.checked} onChange={() => isTodoComplete(item)} />
                <span className="checkmark"></span>
              </label>
              <span className={item.checked ? 'completed' : ''}>{item.todoName}</span>
              <button className="delete-btn" onClick={() => deleteTodoItem(item.id)}>×</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-todo">Add a todo to get started!</p>
      )}
    </div>
  );
}

export default Content;
