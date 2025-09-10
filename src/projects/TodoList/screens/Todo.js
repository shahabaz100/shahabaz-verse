import { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import './Todo.css';

function Todo({ darkMode }) {
  const [todoItems, setTodoItems] = useState([]);
  const [addNewTodo, setNewTodo] = useState('');
  const [searchTodo, setsearchTodo] = useState('');

  useEffect(() => {
    fetchToDo();
  }, []);

  const fetchToDo = async () => {
    const querySnap = await getDocs(collection(db, 'todo'));
    setTodoItems(querySnap.docs.map((item) => ({ id: item.id, ...item.data() })));
  };

  const addNewTodoItem = async () => {
    try {
      await addDoc(collection(db, 'todo'), {
        todoName: addNewTodo,
        checked: false
      });
      fetchToDo();
    } catch (error) {
      console.log('error while adding a todo', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addNewTodo.trim()) return;
    addNewTodoItem();
    setNewTodo('');
  };

  const isTodoComplete = async (item) => {
    try {
      const todoRef = doc(db, 'todo', item.id);
      await updateDoc(todoRef, { checked: !item.checked });
      fetchToDo();
    } catch (error) {
      console.log('Error while updating checkbox', error);
    }
  };

  const deleteTodoItem = async (id) => {
    try {
      const todoRef = doc(db, 'todo', id);
      await deleteDoc(todoRef);
      fetchToDo();
    } catch (error) {
      console.log('error while deleting todo', error);
    }
    const listItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(listItems);
  };

  const footerTitle =
    todoItems.length >= 1 ? `Total Todos: ${todoItems.length}` : 'No Todos Added';

  return (
    <div className={`todo-page ${darkMode ? 'light' : 'dark'}`}>
      {/* Inline Header */}
      <header className="todo-header">
        <h1>Todo List</h1>
        <p>Manage your daily tasks with ease</p>
      </header>

      <div className="todo-container">
        {/* Search */}
        <div className="todo-search">
          <input
            id="search"
            type="text"
            placeholder="Search..."
            value={searchTodo}
            onChange={(e) => setsearchTodo(e.target.value)}
          />
        </div>

        {/* Add Form */}
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a new task..."
            value={addNewTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button>Add</button>
        </form>

        {/* Todo List */}
        {todoItems.length ? (
          <div className="todo-list">
            {todoItems
              .filter((item) =>
                item.todoName.toLowerCase().includes(searchTodo.toLowerCase())
              )
              .map((item) => (
                <div key={item.id} className="todo-item">
                  <input
                    type="checkbox"
                    className="todo-checkbox"
                    checked={item.checked}
                    onChange={() => isTodoComplete(item)}
                  />
                  <span
                    className={`todo-text ${item.checked ? 'completed' : ''}`}
                  >
                    {item.todoName.charAt(0).toUpperCase() + item.todoName.toLowerCase().slice(1)}
                  </span>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTodoItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', opacity: 0.7 }}>Add a Todo!</p>
        )}
      </div>

      {/* Inline Footer */}
      <footer className="todo-footer">{footerTitle}</footer>
    </div>
  );
}

export default Todo;
