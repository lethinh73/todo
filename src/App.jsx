import { useState, useRef } from "react";
import "./App.css";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState([
    { id: "A1", name: "Sleep", isImportant: true, isCompleted: true },
    { id: "A2", name: "Read books", isImportant: false, isCompleted: false },
    { id: "A3", name: "Apply jobs", isImportant: true, isCompleted: false },
    { id: "A4", name: "Go to the gym", isImportant: false, isCompleted: false },
    { id: "A5", name: "Learn React", isImportant: true, isCompleted: false },
  ]);

  const completeCheckboxItem = (id) => {
    console.log("Item completed:", id);
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  const todoItems = todoList.map((todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      name={todo.name}
      isImportant={todo.isImportant}
      isCompleted={todo.isCompleted}
      completeCheckboxItem={completeCheckboxItem}
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
              console.log("New task added:", newTask);
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
    </div>
  );
}

export default App;
