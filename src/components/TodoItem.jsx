function TodoItem(props) {
  return (
    <div className="todo-item" onClick={() => props.handleViewTodo(props.id)}>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={() => {
            props.handleToggleComplete(props.id);
          }}
        />
        <span className="todo-item-text">{props.name}</span>
      </div>
      {props.isImportant && <p> ⭐️</p>}
    </div>
  );
}

export default TodoItem;
