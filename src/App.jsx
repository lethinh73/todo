import { useState, useRef } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";

function App() {
  const [todoList, setTodoList] = useState([
    { id: "A1", name: "Sleep", isImportant: true, isCompleted: true },
    { id: "A2", name: "Read books", isImportant: false, isCompleted: false },
    { id: "A3", name: "Apply jobs", isImportant: true, isCompleted: false },
    { id: "A4", name: "Go to the gym", isImportant: false, isCompleted: false },
    { id: "A5", name: "Learn React", isImportant: true, isCompleted: false },
  ]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeTodoID, setActiveTodoID] = useState(null);
  
  const todoInputRef = useRef();

  const handleToggleComplete = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleViewTodo = (id) => {
    setShowSidebar(true);
    setActiveTodoID(id);
    console.log("Clicked todo item with ID:", id);
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setActiveTodoID(null);
  };

  const handleAddTodo = (e) => {
    if (e.key === "Enter") {
      const newTask = e.target.value.trim();
      if (newTask) {
        const newTodo = {
          id: crypto.randomUUID(),
          name: newTask,
          isImportant: false,
          isCompleted: false,
        };
        setTodoList((prev) => [...prev, newTodo]);
        todoInputRef.current.value = "";
      }
    }
  };

  const activeTodoItem = todoList.find((todo) => todo.id === activeTodoID);

  return (
    <div className="container">
      <h1>Todo App</h1>

      <input
        ref={todoInputRef}
        type="text"
        name="add-new-task"
        className="task-input"
        placeholder="Add a new task"
        onKeyDown={handleAddTodo}
      />

      <div className="todo-list">
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            isImportant={todo.isImportant}
            isCompleted={todo.isCompleted}
            handleToggleComplete={handleToggleComplete}
            handleViewTodo={handleViewTodo}
          />
        ))}
      </div>

      {showSidebar && (
        <Sidebar
          key={activeTodoItem.id}
          activeTodoItem={activeTodoItem}
          handleUpdateTodo={handleUpdateTodo}
          handleCloseSidebar={handleCloseSidebar}
        />
      )}
    </div>
  );
}

export default App;
