import { useState, useRef } from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState([
    { id: "A1", name: "Learn React" },
    { id: "A2", name: "Learn CSS" },
    { id: "A3", name: "Learn JavaScript" },
  ])

  const todoItems = todoList.map((todo) => (
    <TodoItem key={todo.id} name={todo.name} />
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
              console.log("New task added:", newTask);
              const newTodo = {
                id: crypto.randomUUID(),
                name: newTask,
              };
              setTodoList([...todoList, newTodo]);
              todoInputRef.current.value = "";
            }
          }
        }}
      />

      <div className="todo-list">
        {todoItems}
      </div>
    </div>
  );
}

export default App;
