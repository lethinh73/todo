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

  const completeCheckboxItem = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };
  const viewTodoItem = (id) => {
    setShowSidebar(true);
    setActiveTodoID(id);
    console.log("Clicked todo item with ID:", id);
  };
  const updateTodoItem = (id, updatedTodo) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updatedTodo };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
    setActiveTodoID(null);
  };

  const activeTodoItem = todoList.find((todo) => todo.id === activeTodoID);

  const todoItems = todoList.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      name={todo.name}
      isImportant={todo.isImportant}
      isCompleted={todo.isCompleted}
      completeCheckboxItem={completeCheckboxItem}
      viewTodoItem={viewTodoItem}
    />
  ));

  const todoInputRef = useRef();

  return (
    <div className="container">
      <h1>Todo App</h1>

      <input
        ref={todoInputRef}
        type="text"
        name="add-new-task"
        className="task-input"
        placeholder="Add a new task"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newTask = e.target.value;
            if (newTask) {
              const newTodo = {
                id: crypto.randomUUID(),
                name: newTask,
                isImportant: false,
                isCompleted: false,
              };
              setTodoList([...todoList, newTodo]);
              todoInputRef.current.value = "";
            }
          }
        }}
      />

      <div className="todo-list">{todoItems}</div>
      {showSidebar && (
        <Sidebar
          key={activeTodoItem.id}
          activeTodoItem={activeTodoItem}
          updateTodoItem={updateTodoItem}
          closeSidebar={closeSidebar}
        />
      )}
    </div>
  );
}

export default App;
