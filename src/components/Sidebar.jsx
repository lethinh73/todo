import "./Sidebar.css";
import { useState } from "react";

function Sidebar(props) {
  const [name, setName] = useState(props.activeTodoItem.name);
  const [isCompleted, setIsCompleted] = useState(props.activeTodoItem.isCompleted);
  const [isImportant, setIsImportant] = useState(props.activeTodoItem.isImportant);

  const handleSave = (e) => {
    const updatedTodo = {
        name: name,
        isCompleted: isCompleted,
        isImportant: isImportant,
    };

    props.updateTodoItem(props.activeTodoItem.id, updatedTodo);
  };

  return (
    <div className="sidebar">
      <form className="sb-form">
        <div className="sb-form-field">
          <label htmlFor="sb-name">Task Name</label>
          <input
            type="text"
            id="sb-name"
            name="sb-name"
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value.trim())}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-completed">Is Completed</label>
          <input
            type="checkbox"
            id="sb-completed"
            name="sb-completed"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-important">Is Important</label>
          <input
            type="checkbox"
            id="sb-important"
            name="sb-important"
            checked={isImportant}
            onChange={(e) => setIsImportant(e.target.checked)}
          />
        </div>
      </form>
      <div className="sb-footer">
        <button className="sb-save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="sb-cancel-btn" onClick={props.handleCloseSidebar}>
            Cancel
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
