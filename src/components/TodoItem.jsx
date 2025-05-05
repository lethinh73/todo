export const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={() => {
            props.completeCheckboxItem(props.id);
          }}
        />
        <span className="todo-item-text">{props.name}</span>
      </div>
      {props.isImportant && <p> ⭐️</p>}
    </div>
  );
};
