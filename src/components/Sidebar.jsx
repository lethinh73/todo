import "./Sidebar.css";

function Sidebar(props) {
  const handleSave = (e) => {
    const updatedTodo = {
        name: document.getElementById("sb-name").value,
        isCompleted: document.getElementById("sb-completed").checked,
        isImportant: document.getElementById("sb-important").checked,
    };

    props.updateTodoItem(props.activeTodoItem.id, updatedTodo);
  };

  const handleCancel = (e) => {
    props.closeSidebar();
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
            defaultValue={props.activeTodoItem.name}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-completed">Is Completed</label>
          <input
            type="checkbox"
            id="sb-completed"
            name="sb-completed"
            defaultChecked={props.activeTodoItem.isCompleted}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-important">Is Important</label>
          <input
            type="checkbox"
            id="sb-important"
            name="sb-important"
            defaultChecked={props.activeTodoItem.isImportant}
          />
        </div>
      </form>
      <div className="sb-footer">
        <button className="sb-save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="sb-cancel-btn" onClick={handleCancel}>
            Cancel
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
